import ContactBanner from "@/src/components/Contact/ContactBanner";
import ContactCard from "@/src/components/Contact/ContactCard";

export default function Contact() {
  const contacts = [
    {
      image: "/images/test.jfif",
      title: "Dr. Sebastiaan Rieter",
      description: "Docent",
      phone: "06 86 81 44 19",
      link: "mailto:sebastiaan.rieter@hhs.nl",
    },
    {
      image: "/images/arend.jpg",
      title: "Drs. A. (Arend) Hardorff",
      description: "Lid College van Bestuur",
      link: "mailto:arend.hardorff@hhs.nl",
    },
    {
      image: "/images/hans.jpg",
      title: "H. (Hans) Nederlof",
      description: "Lid College van Bestuur",
      link: "mailto:hans.nederlof@hhs.nl",
    },
  ];

  return (
    <main>
      {/* Banner bovenaan */}
      <ContactBanner />

      {/* Contactlijst eronder */}
      <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col divide-y divide-gray-200">
        {contacts.map((contact, i) => (
          <ContactCard key={i} {...contact} />
        ))}
      </section>
    </main>
  );
}
