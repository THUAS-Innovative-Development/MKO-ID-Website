import { ContactProps } from '@/src/data/type';
import Image from 'next/image';


export default function ContactCard({
  image,
  title,
  description,
  phone,
  email,
  address,
}: ContactProps) {

  return (
    <div className="flex flex-row flex-wrap items-stretch gap-6 py-8">

      <div
        className="
          flex flex-col justify-start
          gap-4
          bg-[#e8ebec]
          text-[#223343]
          text-base sm:text-lg
          font-medium
          leading-relaxed
          p-6 sm:p-8
          flex-[1_1_60%]
          min-w-[200px]
        "
        style={{
          fontFamily: "Aktiv Grotesk, sans-serif",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <h2
         
        >
          Naam: {title}
        </h2>

        <p>Adres: {address}</p>
        <p>Functie: {description}</p>

        {phone && <p>Telefoon: {phone}</p>}

        {email && (
         <p>Email: <a href="mailto:${contact.email}">{email}</a></p>
        )}
      </div>

     
      <div className="flex items-center justify-center flex-[1_1_35%] min-w-[150px]">
        <Image
          src={image}
          alt={title}
          fill
          className="
            w-48 h-48
            sm:w-56 sm:h-56
            md:w-64 md:h-64
            object-cover
            rounded
          "
        />
      </div>

    </div>
  );
}
