import Link from "next/link";
import { LocationCardProps } from "@/src/data/type";

export default function LocationCard({
  image,
  title,
  link,
}: LocationCardProps) {
  return (
    <Link href={link} className="block group">
      <div className="overflow-hidden rounded-sm shadow-md aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <p className="mt-4 text-center">
        <span className="t-h3 normal-case tracking-normal">{title}</span>{" "}
        <span className="text-[#9EA700] font-bold">→</span>
      </p>
    </Link>
  );
}
