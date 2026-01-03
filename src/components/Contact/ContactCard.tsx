type ContactProps = {
  image: string;
  title: string;        // GT Walsheim
  description: string;  // Aktiv Grotesk
  phone?: string;
  link: string;
};

export default function ContactCard({
  image,
  title,
  description,
  phone,
  link,
}: ContactProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 py-8">
      {/* Tekst links */}
      <div className="flex-1">
        <h2 className="text-[#003a8f] text-xl font-semibold" style={{ fontFamily: "GT Walsheim, sans-serif" }}>
          {title}
        </h2>
        <p className="text-gray-700 mt-1" style={{ fontFamily: "Aktiv Grotesk, sans-serif" }}>
          {description}
        </p>
        {phone && (
          <p className="text-gray-700 mt-1" style={{ fontFamily: "Aktiv Grotesk, sans-serif" }}>
            <strong>Telefoon:</strong> {phone}
          </p>
        )}
        <a
          href={link}
          className="text-[#003a8f] underline mt-1 inline-block"
          style={{ fontFamily: "Aktiv Grotesk, sans-serif" }}
        >
          E-mail
        </a>
      </div>

      {/* Afbeelding rechts */}
      <img
        src={image}
        alt={title}
        className="w-48 h-48 md:w-56 md:h-56 object-cover rounded"
      />
    </div>
  );
}
