import ContactBanner from "@/src/components/Contact/ContactBanner";
import ContactCard from "@/src/components/Contact/ContactCard";
import LocationCard from "@/src/components/Contact/LocationCard";
import contactsData from "@/src/data/contacts.json";


export default function Contact() {
  const { locations, contacts } = contactsData;

  return (
    <main>
      <ContactBanner />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#223343] mb-8">
          Onze locatie
        </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#223343] mb-8">
          Contactpersonen
        </h1>

        {contacts.map((contact, i) => (
          <ContactCard key={i} {...contact} />
        ))}
      </section>
    </main>
  );
}
