"""
Downloads the compiled resume PDF from an Overleaf project.

Required environment variables:
  OVERLEAF_EMAIL       — Overleaf account email
  OVERLEAF_PASSWORD    — Overleaf account password
  OVERLEAF_PROJECT_ID  — Project ID from the Overleaf URL
                         e.g. https://www.overleaf.com/project/<PROJECT_ID>
"""

import os
import re
import sys
import requests

email      = os.environ['OVERLEAF_EMAIL']
password   = os.environ['OVERLEAF_PASSWORD']
project_id = os.environ['OVERLEAF_PROJECT_ID']

session = requests.Session()
session.headers['User-Agent'] = (
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 '
    '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
)

# Step 1: Fetch the login page to grab the CSRF token
print('Fetching CSRF token...')
r = session.get('https://www.overleaf.com/login')
r.raise_for_status()

csrf = None
for pattern in [
    r'ol-csrfToken"\s+content="([^"]+)"',
    r'content="([^"]+)"\s+name="csrf-token"',
    r'_csrf["\s:]+["\']([^"\']+)["\']',
    r'name="_csrf"\s+value="([^"]+)"',
]:
    match = re.search(pattern, r.text)
    if match:
        csrf = match.group(1)
        print(f'Found CSRF token via pattern: {pattern}')
        break

if not csrf:
    csrf = session.cookies.get('CSRF-TOKEN') or session.cookies.get('_csrf')

if not csrf:
    sys.exit('ERROR: Could not find CSRF token.')

# Step 2: Try to extract the actual form action URL from the page
login_post_url = 'https://www.overleaf.com/login'
form_action = re.search(r'<form[^>]+action="([^"]+)"', r.text)
if form_action:
    action = form_action.group(1)
    if action.startswith('/'):
        action = 'https://www.overleaf.com' + action
    print(f'Found form action URL: {action}')
    login_post_url = action

common_headers = {
    'Referer': 'https://www.overleaf.com/login',
    'Origin':  'https://www.overleaf.com',
}

# Step 3: Try JSON login first (newer Overleaf), fall back to form-encoded
print('Logging in...')
r = session.post(
    login_post_url,
    json={'_csrf': csrf, 'email': email, 'password': password},
    headers={**common_headers, 'Content-Type': 'application/json'},
    allow_redirects=True,
)

if r.status_code >= 400:
    print(f'JSON login returned {r.status_code}, retrying with form-encoded...')
    # Re-fetch a fresh CSRF token — the old one may be consumed
    r2 = session.get('https://www.overleaf.com/login')
    r2.raise_for_status()
    for pattern in [
        r'ol-csrfToken"\s+content="([^"]+)"',
        r'content="([^"]+)"\s+name="csrf-token"',
        r'_csrf["\s:]+["\']([^"\']+)["\']',
        r'name="_csrf"\s+value="([^"]+)"',
    ]:
        match = re.search(pattern, r2.text)
        if match:
            csrf = match.group(1)
            break

    r = session.post(
        login_post_url,
        data={'_csrf': csrf, 'email': email, 'password': password},
        headers={**common_headers, 'Content-Type': 'application/x-www-form-urlencoded'},
        allow_redirects=True,
    )

if r.status_code >= 400:
    print(f'--- DEBUG: Response status: {r.status_code}')
    print(f'--- DEBUG: Response headers: {dict(r.headers)}')
    print(f'--- DEBUG: Response body (first 500 chars): {r.text[:500]}')
    sys.exit(f'ERROR: Login failed with status {r.status_code} — check your secrets.')

if any(phrase in r.text.lower() for phrase in ['invalid', 'incorrect', 'wrong password', 'authentication failed']):
    sys.exit('ERROR: Login rejected — check OVERLEAF_EMAIL and OVERLEAF_PASSWORD secrets.')

if not any('session' in c.lower() for c in session.cookies.keys()):
    print(f'--- DEBUG: Cookies present: {list(session.cookies.keys())}')
    sys.exit('ERROR: Login appeared to succeed but no session cookie was set.')

print('Login successful.')

# Step 4: Download the compiled PDF
url = f'https://www.overleaf.com/download/project/{project_id}/output/output.pdf'
print(f'Downloading PDF from project {project_id}...')
r = session.get(url)
r.raise_for_status()

content_type = r.headers.get('Content-Type', '')
if 'application/pdf' not in content_type:
    sys.exit(f'ERROR: Expected a PDF but got Content-Type: {content_type}\n'
             f'This usually means the project ID is wrong or the PDF has not been compiled.')

os.makedirs('resources', exist_ok=True)
with open('resources/Resume.pdf', 'wb') as f:
    f.write(r.content)

print(f'Success — resume saved ({len(r.content):,} bytes).')