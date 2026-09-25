import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

const projects = [
  {
    year: '2026',
    title: 'About Me in React',
    description: 'My first React project, rebuilt from a plain HTML page.',
    tech: 'React · Tailwind CSS',
    link: 'https://github.com/CharlesBullo/Lab-Activity-About-Me-in-React-Bullo-Charles-',
  },
  {
    year: '2026',
    title: 'WILDCATS Tray Cloud',
    description: 'A website with online ordering and queueing system with a working database',
    tech: 'HTML · CSS · JavaScript · MySQL',
    link: 'https://github.com/juandelacruz/canteen-queue',
  },
  {
    year: '2025',
    title: 'First Web Development Portfolio',
    description: "A project that teaches me the basics of web development along with minor projects.",
    tech: 'HTML · CSS · JavaScript',
    link: 'https://github.com/juandelacruz/org-event-page',
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
