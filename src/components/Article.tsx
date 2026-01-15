import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { ElementType, ReactNode } from "react";

type ArticleProps = {
  image: string;
  date?: string;
  title: string;
  description: string;
  link?: string;
  variant?: "news" | "project";
  icon?: ElementType;
  accentColor?: string;
};

function ReadMore({ link, themeColor }: { link?: string; themeColor: string }) {
  const content = (
    <span className="inline-flex items-center gap-2 font-semibold">
      <span className="text-base">Lees meer</span>
      <ArrowRight
        size={18}
        className="mt-[1px] transition-transform group-hover:translate-x-1"
      />
    </span>
  );

  if (link) {
    return (
      <a href={link} className="mt-auto" style={{ color: themeColor }}>
        {content}
      </a>
    );
  }

  return (
    <div className="mt-auto" style={{ color: themeColor }}>
      {content}
    </div>
  );
}

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
    <article className="group flex flex-col w-full gap-4 cursor-pointer h-full relative">
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
          <Image
            src={image}
            alt={title}
            fill
            className="
              h-full w-full object-cover
              transition-transform duration-500 ease-in-out
              group-hover:scale-105
            "
            loading="lazy"
          />
        </div>

        {variant === "project" && date && (
          <div
            className="absolute top-0 left-0 px-3 py-1 text-xs font-bold text-white shadow-sm z-10 uppercase tracking-wider"
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
            className="flex items-center gap-2 mb-1"
            style={{ color: themeColor }}
          >
            <Icon size={16} strokeWidth={2} className="mb-0.5" />
            <span className="text-xs font-bold uppercase tracking-widest">
              {date}
            </span>
          </div>
        )}

        <h3 className="t-h3 normal-case tracking-normal text-[#223343] mb-2">
          {title}
        </h3>

        <p className="t-body-sm mb-4">{description}</p>

        <ReadMore link={link} themeColor={themeColor} />
      </div>
    </article>
  );
}
