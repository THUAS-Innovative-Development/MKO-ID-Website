import { Calendar, ArrowRight } from "lucide-react";
import type { ElementType, ReactNode } from "react";

type ArticleProps = {
  image: string;
  date: string;
  title: string;
  description: string;
  link?: string;
  variant?: "news" | "project";
  icon?: ElementType;
  accentColor?: string;
};

export function Article({
  image,
  date,
  title,
  description,
  link = "#",
  variant = "news",
  icon: Icon = Calendar,
  accentColor = "#00b2cd",
}: ArticleProps): ReactNode {
  const themeColor =
    accentColor || (variant === "project" ? "#9EA700" : "#00b2cd");

  return (
    <article className="group flex flex-col max-w-md w-full gap-4 cursor-pointer h-full relative">
      <div className="h-54 w-full overflow-hidden relative">
        <div
          className="
      h-full w-full
      [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]
      group-hover:[clip-path:polygon(0_0,100%_7.03828%,93.8889%_93.9617%,4.11107%_100%)]
      transition-[clip-path] duration-500 ease-in-out
      will-change-[clip-path]
    "
        >
          <img
            src={image}
            alt={title}
            className="
        h-full w-full object-cover
        transition-transform duration-500 ease-in-out
        group-hover:scale-105
      "
            loading="lazy"
          />
        </div>

        {variant === "project" && (
          <div
            className="absolute top-0 left-0 px-3 py-1 text-xs font-bold text-white shadow-sm z-10"
            style={{ backgroundColor: themeColor }}
          >
            {date}
          </div>
        )}
      </div>

      <div className="flex flex-col grow relative">
        {variant === "project" && (
          <div className="absolute -top-12 right-4 bg-white p-2 shadow-md rounded-full border border-gray-100 z-10">
            <Icon size={20} style={{ color: themeColor }} />
          </div>
        )}

        {variant === "news" && (
          <div
            className="flex items-center gap-1 mb-1"
            style={{ color: themeColor }}
          >
            <Icon size={16} strokeWidth={2} className="mb-0.5" />
            <h3 className="text-sm font-bold">{date}</h3>
          </div>
        )}

        <h1 className="text-lg text-[#223343] font-arial-black leading-tight mb-2">
          {title}
        </h1>

        <p className="font-semibold text-[#223343] text-sm leading-relaxed mb-4">
          {description}
        </p>

        <a
          href={link}
          className="flex items-center gap-2 font-semibold mt-auto"
          style={{ color: themeColor }}
        >
          <p className="text-lg">Lees meer</p>
          <ArrowRight
            size={20}
            className="mt-1 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
}
