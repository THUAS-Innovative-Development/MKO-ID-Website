import { LocationCardProps } from "@/src/data/type";

export default function LocationCard({
  image,
  title,
  link,
}: LocationCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="clip-fancy overflow-hidden shadow-md aspect-[16/9]">
        <img
          src={image}
          alt={`Foto van locatie ${title}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <p className="mt-4 text-center">
        <span className="t-h3 normal-case tracking-normal">
          {title}
        </span>{" "}
        <span className="text-[var(--id-accent)] font-bold">→</span>
      </p>
    </a>
  );
}
