import kenjiImg    from '../../images/kenji.png'
import greyduckImg from '../../images/greyduck.jpg'
import PageLayout  from '../components/PageLayout.jsx'

const SECTIONS = [
  {
    id: 'about',
    title: 'About',
    paragraphs: [
      "Hello! I'm Kenji Her, a data engineer at Travelers Insurance. Originally from Saint Paul, Minnesota, I earned my Bachelor of Science in Mathematics and Master of Science in Computer Science from the University of Minnesota. Outside of work and academics, I enjoy browsing reddit, hitting the gym, and playing ultimate frisbee. I also hope to use this personal website as a medium to express more creativity in my life.",
    ],
  },
  {
    id: 'frisbee',
    title: 'Frisbee Lore',
    paragraphs: [
      "Have I mentioned that I play ultimate frisbee? One summer day before my freshman year of high school, I was tossing with some of my cousins who played. They gave me a hard time about my terrible throws. Fast forward to the club fair that same year— I signed up for my high school's club team to prove to them— and myself—that I could improve. Since joining, Ultimate has been a crucial part of my life.",
      "Although my high school's team wasn't among the top-ranked in Minnesota, we steadily improved over my four years there. Along the way, I earned several accolades: twice named captain, two-time all-conference, all-state selection, and a 4th-place finish at YCC. I also helped make ultimate frisbee a varsity letter sport at Roseville. By senior year, I knew ultimate would play a major role in my college decision. Ultimately, I chose to attend the University of Minnesota",
      "Unlike my high school, the U had an established program that competed nationally. After being cut from the final round of Grey Duck tryouts, I officially joined the U's B team, Ugly Duckling. While I was disappointed with the outcome, freshman year tryouts taught me valuable lessons—the biggest being that I had to unlearn bad habits. That year, Ugly made it to regionals for the second time in team history—as far as I know. In my sophomore year, I chose to self-cut from the final round of Grey Duck tryouts. It was a tough decision since I always thought I wanted to compete at the highest level. But my first year on Ugly showed me that playing with my friends was more important—and we were supposed to be cracked that year. Unfortunately, the pandemic brought my college frisbee experience to a halt. Frisbee didn't resume until the fall of my senior year. By then, I had also been named captain of Ugly. The pandemic gave me time to reflect on my future in ultimate, and I struggled with the thought of whether I'd regret not giving my all in college ultimate. After some encouragement from my friends, I took a leap and went for one last real tryout. To my surprise, Grey Duck took me as a senior—something almost unheard of at the time. Long story short, I ended up playing two more years for Grey Duck in graduate school and earned unc status. During my time on the team, we placed 5th, 13th, and 5th, respectively. Looking back, I'm incredibly grateful I didn't give up on myself. Ultimate—and Grey Duck—shaped who I am today. 1D1L.",
      "I'm not sure if there's much left to my competitive ultimate career, but playing club will be a game-time decision.",
    ],
  },
]

export default function About() {
  return (
    <div className="w-full">
      <PageLayout>
        {SECTIONS.map((section, i) => (
          <div key={section.id}>

            {/* Divider between sections */}
            {i > 0 && <hr className="border-dk-border mb-10" />}

            {/* About section gets the two-column photo layout */}
            {section.id === 'about' ? (
              <div className="flex flex-col md:flex-row md:items-start gap-8 mb-10">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 text-dk-primary">
                    {section.title}
                  </h2>
                  <div className="text-dk-text leading-relaxed text-base space-y-4">
                    {section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
                <div className="flex-shrink-0 flex justify-center md:justify-end">
                  <img
                    src={kenjiImg}
                    alt="Kenji Her"
                    className="rounded-full object-cover w-48 h-48 md:w-56 md:h-56"
                  />
                </div>
              </div>
            ) : (
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4 text-dk-primary">
                  {section.title}
                </h2>
                <div className="text-dk-text leading-relaxed text-base space-y-4">
                  {section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </div>
            )}

          </div>
        ))}
      </PageLayout>

      {/* Full-width Grey Duck photo */}
      <div className="w-full">
        <img
          src={greyduckImg}
          alt="Grey Duck ultimate frisbee team"
          className="w-full object-cover"
        />
      </div>
    </div>
  )
}
