"use client";
import Image from "next/image";

export default function ContactBanner() {
  return (
    <header className="w-screen bg-[#9EA700] relative overflow-hidden py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-6 lg:gap-8">
        <div
          className="flex flex-col justify-center bg-white relative z-10 w-full lg:w-1/2 p-6 sm:p-10 md:p-12"
          style={{ clipPath: "polygon(0 0, 100% 4%, 96% 95%, 0 100%)" }}
        >
          <h1 className="t-h1 mb-4">Contact</h1>

          <p className="t-lead">
            Op deze pagina vind je alle contactgegevens voor Innovative
            Development.
          </p>
        </div>

        <div className="w-full lg:w-1/2 relative overflow-hidden rounded-sm min-h-[220px] sm:min-h-[280px] md:min-h-[340px]">
          <Image
            src="https://www.dehaagsehogeschool.nl/sites/hhs/files/2022-11/_MG_8857.jpg"
            alt="Uitzicht vanaf het hoofdgebouw De Haagse Hogeschool"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </header>
  );
}
