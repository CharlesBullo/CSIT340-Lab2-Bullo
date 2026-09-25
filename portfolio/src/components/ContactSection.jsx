import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

const links = [
  { label: 'Email', href: 'mailto:charlesdarwin.bullo@cit.edu', text: 'charlesdarwin.bullo@cit.edu' },
  { label: 'GitHub', href: 'https://github.com/CharlesBullo', text: 'github.com/CharlesBullo' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/CharlesBullo', text: 'linkedin.com/in/CharlesBullo' },
]

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        {links.map((link) => (
          <ContactLink key={link.label} {...link} />
        ))}
      </ul>
    </section>
  )
}

export default ContactSection
