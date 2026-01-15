"use client";
import Image from 'next/image';

export default function ContactBanner() {
  return (
    <div className="w-screen bg-[#9EA700] relative overflow-hidden py-12">

      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row lg:items-stretch lg:justify-between">

        <div
          className="flex flex-col justify-center bg-white relative z-10 w-full lg:w-1/2 p-6 sm:p-12"
          style={{
            clipPath: 'polygon(0 0, 100% 4%, 96% 95%, 0 100%)',
          }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003a8f] mb-4"
            style={{ fontFamily: 'GT Walsheim, sans-serif', color: '#223343' }}
          >
            Contact
          </h1>
          <p
            className="text-base sm:text-lg text-gray-800"
            style={{ fontFamily: 'Aktiv Grotesk, sans-serif' }}
          >
            Op deze pagina vind je alle contactgegevens voor Inovation Development.
          </p>
        </div>

        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-8">
          <Image
            src="https://www.dehaagsehogeschool.nl/sites/hhs/files/2022-11/_MG_8857.jpg"
            alt="Uitzicht vanaf het hoofdgebouw De Haagse Hogeschool"
            fill
            className="object-cover rounded"
          />
        </div>

      </div>
    </div>
  );
}
