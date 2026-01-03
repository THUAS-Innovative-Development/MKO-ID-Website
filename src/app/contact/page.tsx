import ContactBanner from "@/src/components/Contact/ContactBanner";
import ContactCard from "@/src/components/Contact/ContactCard";
import contacts from "@/src/data/contacts.json";

export default function Contact() {
  return (
    <main>
      <ContactBanner />

      <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col divide-y divide-gray-200">
        {contacts.map((contact, i) => (
          <ContactCard key={i} {...contact} />
        ))}
      </section>
    </main>
  );
}