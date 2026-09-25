import SectionHeading from './SectionHeading'
import Fact from './Fact'

const facts = [
  { label: 'Course', value: 'BS Information Technology' },
  { label: 'Year level', value: 'Third year' },
  { label: 'School', value: 'CIT-U' },
  { label: 'Based in', value: 'Cebu City' },
]

function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Talisay City and chose CIT-U for college. I picked IT because I
        have always wanted to learn programming, graphics designing, and create software applications.
      </p>
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I am a critical thinker who looks at facts objectively to make the right decisions and answers. 
        I love working as a collaborator to reach certain goals for my team.
      </p>
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I have been playing videogames for almost my entire life as a hobby and loves talking with
        friends during my spare time.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {facts.map((fact) => (
          <Fact key={fact.label} label={fact.label} value={fact.value} />
        ))}
      </dl>
    </section>
  )
}

export default AboutSection
