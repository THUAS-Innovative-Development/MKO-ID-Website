import { Mail } from "lucide-react"
import type { ReactNode } from "react"

type ContactProps = {
  name: string
  role: string
  email: string
  description: string
}

export function Contact({
  name,
  role,
  email,
  description,
}: ContactProps): ReactNode {
  return (
    <div className="group flex flex-col max-w-md w-full gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
      <p className="font-aktivgrotesk text-gray-800 text-base">{description}</p>
      <h2 className="font-gtwalsheim font-bold text-amber-700 text-xl">{name}</h2>
      <h3 className="font-gtwalsheim font-bold text-gray-600 text-sm">{role}</h3>
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 font-aktivgrotesk font-semibold text-blue-600 mt-2 hover:underline"
        aria-label={`Stuur een email naar ${name}`}
      >
        <Mail size={16} /> {email}
      </a>
    </div>
  )
}
