import { Calendar, ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

type ArticleProps = {
  image: string
  date: string
  title: string
  description: string
  link?: string
}

export function Article({
  image,
  date,
  title,
  description,
  link = "#",
}: ArticleProps): ReactNode {
  return (
    <article className="group flex flex-col max-w-md w-full gap-4 cursor-pointer">
      <div className="h-54 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`
            h-full w-full object-cover
            transition-[clip-path] duration-300
            [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]
            group-hover:[clip-path:polygon(0_0,100%_2.03828%,97.8889%_97.9617%,2.11107%_100%)]
          `}
          loading="lazy"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1 text-[#223343]">
          <Calendar size={16} strokeWidth={2} className="mb-0.5"/>
          <h3 className="text-sm font-bold">{date}</h3>
        </div>

        <h1 className="text-lg text-[#223343] font-arial-black">{title}</h1>
        <p className="font-semibold text-[#223343]">
          {description}
        </p>
      </div>

      <a
        href={link}
        className="flex items-center gap-2 text-[#223343] font-semibold"
      >
        <p className="text-lg">Lees meer</p>
        <ArrowRight size={20} className="mt-1" color="#00b2cd" />
      </a>
    </article>
  )
}
