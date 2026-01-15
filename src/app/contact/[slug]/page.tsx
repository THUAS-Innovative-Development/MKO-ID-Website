import contactsData from "@/src/data/contacts.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return contactsData.locations.map((location) => ({
    slug: location.slug,
  }));
}

export default async function ContactLocatiePage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = params instanceof Promise ? await params : params;
  const slug = rawSlug.toLowerCase();

  const locatie = contactsData.locations.find(
    (l) => l.slug.toLowerCase() === slug
  );

  if (!locatie) notFound();

  return (
    <div className="relative overflow-hidden">

      {/* Banner */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row lg:items-stretch lg:justify-between py-12 bg-[#9EA700] rounded-b-[4rem]">

        {/* Text Left */}
        <div
          className="flex flex-col justify-center bg-white relative z-10 w-full lg:w-1/2 p-6 sm:p-12"
          style={{
            clipPath: 'polygon(0 0, 100% 4%, 96% 95%, 0 100%)',
          }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'GT Walsheim, sans-serif', color: '#223343' }}
          >
            {locatie.title}
          </h1>

          <p
            className="text-base sm:text-lg text-gray-800"
            style={{ fontFamily: 'Aktiv Grotesk, sans-serif' }}
          >
            {locatie.description}
          </p>
        </div>

        {/* Image Right */}
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-8 flex items-center">
          <img
            src={locatie.image}
            alt={`Foto van ${locatie.title}`}
            className="w-full h-auto object-cover rounded shadow-lg"
          />
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div
          className="bg-gray-200 rounded-lg shadow-md p-6 overflow-x-auto"
          style={{
            WebkitFontSmoothing: 'antialiased',
            textSizeAdjust: 'none',
            color: '#223343',
            fontFamily: 'Aktiv Grotesk, sans-serif',
            fontSize: '1.6rem',
            fontWeight: 500,
            lineHeight: 1.625,
            textDecorationSkipInk: 'auto',
            boxSizing: 'inherit',
            wordBreak: 'break-word',
          }}
        >
          <h2 className="text-2xl font-semibold text-[#223343] mb-4">
            Contact & bereikbaarheid
          </h2>
          <table className="w-full text-right border-collapse table-auto">
            <tbody>
              <tr className="border-b border-gray-400">
                <th className="py-2 px-4 text-left font-medium whitespace-nowrap">Adres:</th>
                <td className="py-2 px-4">{locatie.address}</td>
              </tr>
              <tr className="border-b border-gray-400">
                <th className="py-2 px-4 text-left font-medium whitespace-nowrap">Telefoon:</th>
                <td className="py-2 px-4">{locatie.phone}</td>
              </tr>
              {locatie.openingstijd && (
                <tr className="border-b border-gray-400">
                  <th className="py-2 px-4 text-left font-medium whitespace-nowrap">Openingstijden:</th>
                  <td className="py-2 px-4">{locatie.openingstijd}</td>
                </tr>
              )}
              {locatie.Parkeren && (
                <tr>
                  <th className="py-2 px-4 text-left font-medium whitespace-nowrap">Parkeren:</th>
                  <td className="py-2 px-4">{locatie.Parkeren}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      <br></br>
    </div>
  );
}
