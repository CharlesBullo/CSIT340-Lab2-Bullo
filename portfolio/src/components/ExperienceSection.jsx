import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

const timeline = [
  {
    period: '2024 – Present',
    title: 'BS Information Technology',
    place: 'Cebu Institute of Technology – University',
    description: 'Taking up web development, databases, and systems analysis.',
  },
  {
    period: '2022 – 2024',
    title: 'Senior High School, STEM Strand',
    place: 'Cebu Institute of Technology – University',
    description: 'Studied for college.',
  },
]

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        {timeline.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </ol>
    </section>
  )
}

export default ExperienceSection
