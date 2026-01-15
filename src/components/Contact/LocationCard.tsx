import Link from "next/link";
import { LocationCardProps } from "@/src/data/type";

export default function LocationCard({
  image,
  title,
  link,
}: LocationCardProps) {
  return (
    <Link href={link} className="block group">
      <div className="overflow-hidden rounded shadow-md aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <p className="mt-4 text-center text-[#223343] font-medium text-lg">
        {title} <span className="text-blue-600">→</span>
      </p>
    </Link>
  );
}
