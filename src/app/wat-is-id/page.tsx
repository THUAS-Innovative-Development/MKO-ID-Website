import fs from "fs";
import path from "path";
import { Article } from "@/src/components/Article";
import {
  ArrowRight,
  Check,
  Rocket,
  MapPin,
  Brain,
  Search,
  PenTool,
  Terminal,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const COLORS = {
  primary: "#223343",
  accent: "#9EA700",
  bgLight: "#f0f0f0",
};

const PROJECT_ICONS = [Rocket, MapPin, Brain, Terminal, Search, PenTool];

const DATA = {
  features: ["Geen hoorcolleges", "Echte opdrachtgevers", "Zelfstandig werken"],
  oldSchool: [
    "Docent vertelt, jij luistert",
    "Tentamens over theorie uit een boek",
    "Oefenen met verzonnen casussen",
    "Vaste roosters en verplichte uren",
  ],
  newSchool: [
    "Jij onderzoekt wat je moet leren",
    "Beoordeling op basis van eindproducten",
    "Echte problemen van bedrijven",
    "Jij plant je eigen tijd in teams",
  ],
  skills: [
    {
      icon: Terminal,
      title: "Techniek",
      desc: "Je bouwt werkende oplossingen. Of het nu een app, website, database of IoT-systeem is. Jij kiest de techniek die past.",
    },
    {
      icon: Search,
      title: "Onderzoek",
      desc: "Je leert interviewen en observeren. Je bouwt pas een oplossing als je zeker weet dat het probleem écht bestaat.",
    },
    {
      icon: PenTool,
      title: "Design",
      desc: "Je leert interfaces (UI) ontwerpen en nadenken over gebruiksgemak (UX). Je maakt producten die mensen willen gebruiken.",
    },
  ],
  process: [
    {
      title: "De Vraag",
      desc: "Een bedrijf pitcht een probleem. Jij vormt een team.",
    },
    {
      title: "Deep Dive",
      desc: "Je gaat naar buiten. Gebruikers interviewen en observeren.",
    },
    {
      title: "Ideation",
      desc: "Brainstormen & Prototypen. Wat is de beste oplossing?",
    },
    { title: "Delivery", desc: "Bouwen, testen en het eindproduct opleveren." },
  ],
};

const withBasePath = (src: string) => {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (basePath && src.startsWith(basePath + "/")) return src;

  const normalized = src.startsWith("/") ? src : `/${src}`;

  return `${basePath}${normalized}`;
};

interface Project {
  name: string;
  description: string;
  image: string;
  term: string;
  slug: string;
  date: string;
}

function getRecentProjects() {
  try {
    const projectsRoot = path.join(process.cwd(), "public", "projects");
    if (!fs.existsSync(projectsRoot)) return [];

    const terms = fs
      .readdirSync(projectsRoot)
      .filter((t) => fs.statSync(path.join(projectsRoot, t)).isDirectory());

    const allProjects: Project[] = [];
    terms.forEach((term) => {
      const termPath = path.join(projectsRoot, term);
      const projects = fs
        .readdirSync(termPath)
        .filter((p) => fs.statSync(path.join(termPath, p)).isDirectory());

      projects.forEach((proj) => {
        const infoPath = path.join(termPath, proj, "info.json");
        let info: {
          project_name?: string;
          description?: string;
          image?: string;
          date?: string;
        } = {};
        if (fs.existsSync(infoPath)) {
          info = JSON.parse(fs.readFileSync(infoPath, "utf8"));
        }

        let image = info.image || "/file.svg";
        if (!image.startsWith("http") && !image.startsWith("/")) {
          image = `/projects/${term}/${proj}/${image.replace("./", "")}`;
        }

        allProjects.push({
          name: info.project_name || proj,
          description: info.description || "Bekijk dit project.",
          image: image,
          term: term,
          slug: proj,
          date: info.date || term,
        });
      });
    });

    return allProjects.reverse().slice(0, 3);
  } catch (e) {
    console.error("Fout bij laden projecten:", e);
    return [];
  }
}

export default function WatIsID() {
  const recentProjects = getRecentProjects();

  return (
    <div className="w-full bg-white t-page" style={{ color: COLORS.primary }}>
      {/* HERO */}
      <header className="relative bg-[#f0f0f0] py-12 md:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)] z-0 hidden md:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="border-l-4 pl-6 mb-6"
              style={{ borderColor: COLORS.accent }}
            >
              <h2 className="t-eyebrow mb-2">HBO-ICT Differentiatie</h2>
              <h1 className="t-h1 mb-4">Innovative Development</h1>
            </div>

            <p className="t-lead mb-8">
              Innovatieve oplossingen bedenken en uitvoeren voor bedrijven en
              organisaties. Vooral buiten de school, én out of the box.
            </p>

            <div className="flex flex-wrap gap-3">
              {DATA.features.map((text, i) => (
                <Badge key={i} text={text} />
              ))}
            </div>
          </div>

          <div
            className="relative h-64 md:h-80 w-full shadow-xl rounded-sm overflow-hidden border-b-4"
            style={{ borderColor: COLORS.accent }}
          >
            <Image
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop"
              alt="Studenten samenwerkend"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </header>

      {/* SECTION 1 */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="t-h2">Niet stampen, maar doen</h2>
          <p className="t-body mt-4 max-w-2xl mx-auto">
            Bij ID zit je niet in de collegebanken. Je wordt behandeld als een{" "}
            <strong>junior professional</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-gray-300 opacity-75">
            <h3 className="t-h3 text-gray-500 mb-4">Traditioneel Onderwijs</h3>
            <ul className="space-y-4">
              {DATA.oldSchool.map((text, i) => (
                <OldSchoolItem key={i} text={text} />
              ))}
            </ul>
          </div>

          <div
            className="bg-white p-8 rounded-sm shadow-lg border-l-4 relative"
            style={{ borderColor: COLORS.accent }}
          >
            <div
              className="absolute -top-3 -right-3 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm"
              style={{ backgroundColor: COLORS.accent }}
            >
              Jouw werkwijze
            </div>

            <h3 className="t-h3 mb-4" style={{ color: COLORS.primary }}>
              Bij Innovative Development
            </h3>

            <ul className="space-y-4">
              {DATA.newSchool.map((text, i) => (
                <NewSchoolItem key={i} text={text} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2 (dark) */}
      <section
        className="text-white py-12 md:py-20 clip-path-slant-top"
        style={{ backgroundColor: COLORS.primary }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="mb-12 border-l-4 pl-6"
            style={{ borderColor: COLORS.accent }}
          >
            <h2 className="t-h2">Het ID Profiel</h2>
            <p className="t-on-dark-body mt-2">
              Je wordt meer dan alleen een programmeur. Je ontwikkelt een breed
              profiel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DATA.skills.map((skill, i) => (
              <SkillCard key={i} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-12 md:py-20 bg-gray-50 clip-path-slant-bottom">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="t-eyebrow mb-2">Portfolio</h3>
            <h2 className="t-h2">Wat maken studenten?</h2>
            <p className="t-body-sm mt-4 max-w-2xl mx-auto">
              Voorbeelden van recente projecten bij echte opdrachtgevers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {recentProjects.length > 0 ? (
              recentProjects.map((item, i) => (
                <Link
                  key={i}
                  href={`/projects/${item.term}/${item.slug}`}
                  className="block h-full group"
                >
                  <Article
                    image={withBasePath(item.image)}
                    title={item.name}
                    description={item.description}
                    date={item.term}
                    icon={PROJECT_ICONS[i % PROJECT_ICONS.length]}
                    variant="project"
                    accentColor={COLORS.accent}
                    link={`/projects/${item.term}/${item.slug}`}
                  />
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center t-muted italic">
                Geen projecten gevonden in public/projects...
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <Link href="/projects" className="t-link">
              Bekijk alle projecten
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="t-h2">Hoe ziet een semester eruit?</h2>
          <p className="t-body-sm mt-2">
            Van vage vraag tot werkend prototype in 20 weken.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block z-0" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {DATA.process.map((step, i) => (
              <ProcessStep key={i} number={(i + 1).toString()} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div
        className="border-t py-16 text-center text-white"
        style={{ backgroundColor: COLORS.primary, borderColor: COLORS.accent }}
      >
        <h2 className="t-h2 text-white">Klaar voor de uitdaging?</h2>

        <p className="t-on-dark-muted max-w-xl mx-auto mb-8 mt-4">
          Innovative Development vraagt initiatief, maar geeft je vrijheid
          terug.
        </p>

        <Link
          href="https://www.dehaagsehogeschool.nl/opleidingen/hbo-bachelor/hbo-ict-innovative-development"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold py-3 px-8 text-lg transition-colors inline-flex items-center gap-2 rounded-sm shadow-md hover:opacity-90"
          style={{ backgroundColor: COLORS.accent }}
        >
          Bekijk de opleiding <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="bg-gray-100 text-[#223343] px-3 py-1 text-sm font-bold border border-gray-200 uppercase tracking-wide">
      {text}
    </span>
  );
}

function OldSchoolItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 min-w-[20px]">
        <div className="w-2 h-2 rounded-full bg-gray-300" />
      </div>
      <span className="t-body-sm text-gray-500 line-through decoration-gray-400">
        {text}
      </span>
    </li>
  );
}

function NewSchoolItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <Check
        className="min-w-[20px] mt-0.5"
        size={20}
        strokeWidth={3}
        style={{ color: COLORS.accent }}
      />
      <span className="t-body-sm font-medium" style={{ color: COLORS.primary }}>
        {text}
      </span>
    </li>
  );
}

function SkillCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="bg-[#1a2836] p-8 border-t-4 hover:bg-[#15202b] transition-colors h-full flex flex-col"
      style={{ borderColor: COLORS.accent }}
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-sm mb-6 border border-gray-700"
        style={{ backgroundColor: COLORS.primary }}
      >
        <Icon size={24} style={{ color: COLORS.accent }} />
      </div>

      <h3 className="t-h3 text-white mb-3">{title}</h3>

      <p className="t-on-dark-muted text-sm leading-relaxed flex-grow">
        {desc}
      </p>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-6 shadow-md border-b-4 border-gray-200 hover:border-[#9EA700] transition-colors group h-full flex flex-col">
      <div
        className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-lg mb-4 transition-colors group-hover:bg-[#9EA700]"
        style={{ backgroundColor: COLORS.primary }}
      >
        {number}
      </div>

      <h3 className="t-h3 mb-2" style={{ color: COLORS.primary }}>
        {title}
      </h3>

      <p className="t-body-sm flex-grow">{desc}</p>
    </div>
  );
}
