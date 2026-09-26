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
    description: 'A website with an online ordering and queueing system with a working database.',
    tech: 'PHP · MySQL · XAMPP',
    link: 'https://github.com/CharlesBullo/WILDCATS-Tray-Cloud',
  },
  {
    year: '2026',
    title: 'Test Wizard',
    description: 'A simple mobile quiz app made for specific subjects.',
    tech: 'XML · Kotlin',
    link: 'https://github.com/CharlesBullo/Test-Wizard',
  },
  {
    year: '2025',
    title: 'First Web Development Portfolio',
    description: "A project that teaches me the basics of web development along with minor projects.",
    tech: 'HTML · CSS · JavaScript',
    link: 'https://github.com/CharlesBullo/First-Web-Development-Portfolio',
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
