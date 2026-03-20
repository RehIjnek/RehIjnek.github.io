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
session.headers['User-Agent'] = 'Mozilla/5.0'

# Step 1: Fetch the login page to grab the CSRF token
print('Fetching CSRF token...')
r = session.get('https://www.overleaf.com/login')
r.raise_for_status()

match = re.search(r'ol-csrfToken" content="([^"]+)"', r.text)
if not match:
    sys.exit('ERROR: Could not find CSRF token on login page.')

csrf = match.group(1)

# Step 2: Authenticate
print('Logging in...')
r = session.post(
    'https://www.overleaf.com/login',
    json={'_csrf': csrf, 'email': email, 'password': password},
)
r.raise_for_status()

if 'invalid' in r.text.lower() or r.status_code >= 400:
    sys.exit('ERROR: Login failed — check OVERLEAF_EMAIL and OVERLEAF_PASSWORD secrets.')

# Step 3: Download the compiled PDF
url = f'https://www.overleaf.com/download/project/{project_id}/output/output.pdf'
print(f'Downloading PDF from project {project_id}...')
r = session.get(url)
r.raise_for_status()

content_type = r.headers.get('Content-Type', '')
if 'application/pdf' not in content_type:
    sys.exit(f'ERROR: Expected a PDF but got Content-Type: {content_type}')

os.makedirs('resources', exist_ok=True)
with open('resources/Resume.pdf', 'wb') as f:
    f.write(r.content)

print(f'Success — resume saved ({len(r.content):,} bytes).')
