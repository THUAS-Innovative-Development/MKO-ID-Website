import ContactBanner from "@/src/components/Contact/ContactBanner";
import ContactCard from "@/src/components/Contact/ContactCard";
import LocationCard from "@/src/components/Contact/LocationCard";
import contactsData from "@/public/pages/contacts.json";

export default function Contact() {
  const { locations, contacts } = contactsData;

  return (
    <main className="l-page">
      <ContactBanner />

      <section className="l-container l-section">
        <h1 className="t-h2 mb-8">Onze locatie</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, i) => (
            <LocationCard
              key={i}
              title={location.title}
              image={location.image}
              link={`/contact/${location.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="l-container l-section flex flex-col gap-8">
        <h2 className="t-h2">Contactpersonen</h2>

        {contacts.map((contact, i) => (
          <ContactCard key={i} {...contact} />
        ))}
      </section>
    </main>
  );
}
