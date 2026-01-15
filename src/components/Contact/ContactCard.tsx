import { ContactProps } from "@/src/data/type";
import Image from "next/image";

export default function ContactCard({
  image,
  title,
  description,
  phone,
  email,
  address,
}: ContactProps) {
  const withBasePath = (src: string) => {
    if (src.startsWith("http://") || src.startsWith("https://")) return src;

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    if (basePath && src.startsWith(basePath + "/")) return src;

    const normalized = src.startsWith("/") ? src : `/${src}`;
    return `${basePath}${normalized}`;
  };

  const imageSrc = withBasePath(image);

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-6 py-8">
      <div className="flex flex-col gap-4 bg-[#e8ebec] p-6 sm:p-8 flex-[1_1_60%]">
        <h2 className="t-h3 normal-case tracking-normal">{title}</h2>

        <div className="space-y-2">
          <p className="t-body-sm">
            <span className="font-semibold text-[#223343]">Functie:</span>{" "}
            {description}
          </p>

          <p className="t-body-sm">
            <span className="font-semibold text-[#223343]">Adres:</span>{" "}
            {address}
          </p>

          {phone && (
            <p className="t-body-sm">
              <span className="font-semibold text-[#223343]">Telefoon:</span>{" "}
              {phone}
            </p>
          )}

          {email && (
            <p className="t-body-sm">
              <span className="font-semibold text-[#223343]">Email:</span>{" "}
              <a className="t-link" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="relative flex-[1_1_35%] min-h-[220px] sm:min-h-[260px] md:min-h-[100%] overflow-hidden rounded-sm">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}
