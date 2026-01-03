type ContactProps = {
  image: string;
  title: string;        // GT Walsheim
  description: string;  // Aktiv Grotesk
  phone?: string;
  email?: string;
};

export default function ContactCard({
  image,
  title,
  description,
  phone,
  email,
}: ContactProps) {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-6 py-8">
      
      {/* Tekst links */}
      <div
        className="
          flex flex-col items-start
          gap-[1.6rem]
          bg-[#e8ebec]
          text-[#223343]
          text-[1.6rem]
          font-medium
          leading-[1.625]
          p-[6.4rem_4.8rem]
          flex-[1_1_67%]
        "
        style={{
          fontFamily: 'Aktiv Grotesk, sans-serif',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        <h2
          className="text-[#223343]"
          style={{ fontFamily: 'GT Walsheim, sans-serif' }}
        >
          {title}
        </h2>

        <p>{description}</p>

        {phone && (
          <p>
            <strong>Telefoon:</strong> {phone}
          </p>
        )}

        {email && (
          <a
            href={email}
            className="underline text-[#223343] hover:text-[#003a8f]"
          >
            {email}
          </a>
        )}
      </div>

      {/* Afbeelding rechts */}
      <div className="flex items-center justify-center flex-[1_1_33%]">
        <img
          src={image}
          alt={title}
          className="
            w-56 h-56
            md:w-64 md:h-64
            object-cover
            rounded
          "
        />
      </div>
    </div>
  );
}
