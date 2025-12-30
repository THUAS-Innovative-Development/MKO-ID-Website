import { createFileRoute } from '@tanstack/react-router'
import { Contact } from '../components/contact.tsx'
import { ExternalLink } from "lucide-react"

export const Route = createFileRoute('/contacts')({
  component: RouteComponent,
})

const testContacts = [
  {
    name: "Sebastiaan",
    role: "Projectcontactpersoon",
    email: "s.m.rieter@hhs.nl",
    description:
      "Heb jij een innovatieve project en zou je dat willen laten uitvoeren? Leg je plan uit en wie weet voeren Haagse Hogeschool studenten het uit.",
  },
]

function RouteComponent() {
  return (
    <div className="p-4 flex flex-col gap-6">
      <h3 className="font-gtwalsheim font-bold text-amber-700 text-2xl mb-4">
        Contact
      </h3>
      {testContacts.map((contact, index) => (
        <Contact key={index} {...contact} />
      ))}

        <div className="mt-6">
        <p className="font-aktivgrotesk text-gray-800 text-base leading-relaxed">
          Voor meer informatie over de Haagse Hogeschool en onze opleidingen,{" "}
          <a
            href="https://www.dehaagsehogeschool.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00B2CD] font-semibold hover:underline flex items-center gap-1"
          >
            klik hier <ExternalLink size={16} />
          </a>.
        </p>
      </div>
    </div>
  )
}
