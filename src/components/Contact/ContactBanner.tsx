"use client";
import Image from 'next/image';

export default function ContactBanner() {
  return (
    <div className="w-screen bg-[#9EA700] relative overflow-hidden py-12">

      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row lg:items-stretch lg:justify-between">

        {/* Squangle container */}
        <div
          className="flex flex-col justify-center bg-white relative z-10 w-full lg:w-[600px] p-12" 
          style={{
            clipPath: 'polygon(0 0, 100% 4%, 96% 95%, 0 100%)',
          }}
        >
          <h1
            className="text-3xl md:text-5xl font-bold text-[#003a8f] mb-4"
            style={{ fontFamily: 'GT Walsheim, sans-serif', color: '#223343' }}
          >
            Contact
          </h1>
          <p
            className="text-lg text-gray-800"
            style={{ fontFamily: 'Aktiv Grotesk, sans-serif' }}
          >
            Op deze pagina vind je alle contactgegevens voor Inovation Development.
          </p>
        </div>

        {/* Afbeelding rechts */}
        <div className="w-full lg:w-[600px] mt-6 lg:mt-0 lg:ml-8 relative h-64 lg:h-[360px]">
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
