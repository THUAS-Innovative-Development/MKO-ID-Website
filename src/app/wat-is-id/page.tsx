import { Article } from "@/src/components/Article";
import { ArrowRight, Check, Rocket, MapPin, Brain, Search, PenTool, Terminal } from "lucide-react";
import Link from "next/link";

const idProjects = [
  {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop", 
    label: "Project Rotterdam", 
    title: "Rotterdam The Hague Airport",
    description: "Een nieuwe, innovatieve check-in balie ontwerpen om de doorstroom van reizigers te verbeteren.",
    icon: Rocket
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", 
    label: "Slimme Prullenbak",
    title: "Gemeente Zoetermeer",
    description: "Een 'slimme prullenbak' ontwikkelen die helpt bij het schoonhouden van de stedelijke omgeving.",
    icon: MapPin
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", 
    label: "Project Gaming",
    title: "Serious Gaming",
    description: "Een game ontwikkelen om de motorische vaardigheden van kinderen spelenderwijs te verbeteren.",
    icon: Brain
  },
]

export default function WatIsID() {
  return (
    <div className="w-full font-sans text-[#223343] bg-white">

      <header className="relative bg-[#f0f0f0] py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)] z-0 hidden md:block"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="border-l-4 border-[#9EA700] pl-6 mb-6">
              <h2 className="text-[#9EA700] text-sm font-bold uppercase tracking-widest mb-2">HBO-ICT Differentiatie</h2>
              <h1 className="font-arial-black text-5xl lg:text-6xl uppercase leading-none mb-4 text-[#223343]">Innovative Development</h1>
            </div>
            <p className="text-xl font-medium leading-relaxed text-gray-700 mb-8">
              "Innovatieve oplossingen bedenken en uitvoeren voor bedrijven en organisaties. Vooral buiten de school, én out of the box."
            </p>
            <div className="flex flex-wrap gap-3">
               <Badge text="Geen hoorcolleges" />
               <Badge text="Echte opdrachtgevers" />
               <Badge text="Zelfstandig werken" />
            </div>
          </div>
          <div className="relative h-80 w-full shadow-xl rounded-sm overflow-hidden border-b-4 border-[#9EA700]">
            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop" alt="Studenten samenwerkend" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-arial-black uppercase text-[#223343]">Niet stampen, maar doen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">Bij ID zit je niet in de collegebanken. Je wordt behandeld als een <strong>junior professional</strong>.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-gray-300 opacity-75">
            <h3 className="text-xl font-bold text-gray-500 mb-4 uppercase">Traditioneel Onderwijs</h3>
            <ul className="space-y-4">
              <OldSchoolItem text="Docent vertelt, jij luistert" />
              <OldSchoolItem text="Tentamens over theorie uit een boek" />
              <OldSchoolItem text="Oefenen met verzonnen casussen" />
              <OldSchoolItem text="Vaste roosters en verplichte uren" />
            </ul>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-lg border-l-4 border-[#9EA700] relative">
            <div className="absolute -top-3 -right-3 bg-[#9EA700] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm">Jouw werkwijze</div>
            <h3 className="text-xl font-bold text-[#223343] mb-4 uppercase">Bij Innovative Development</h3>
            <ul className="space-y-4">
              <NewSchoolItem text="Jij onderzoekt wat je moet leren" />
              <NewSchoolItem text="Beoordeling op basis van eindproducten" />
              <NewSchoolItem text="Echte problemen van bedrijven" />
              <NewSchoolItem text="Jij plant je eigen tijd in teams" />
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#223343] text-white py-20 clip-path-slant-top">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 border-l-4 border-[#9EA700] pl-6">
            <h2 className="text-3xl md:text-4xl font-arial-black uppercase">Het ID Profiel</h2>
            <p className="text-gray-300 mt-2 text-lg">Je wordt meer dan alleen een programmeur. Je ontwikkelt een breed profiel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard icon={Terminal} title="Techniek" desc="Je bouwt werkende oplossingen. Of het nu een app, website, database of IoT-systeem is. Jij kiest de techniek die past." />
            <SkillCard icon={Search} title="Onderzoek" desc="Je leert interviewen en observeren. Je bouwt pas een oplossing als je zeker weet dat het probleem écht bestaat." />
            <SkillCard icon={PenTool} title="Design" desc="Je leert interfaces (UI) ontwerpen en nadenken over gebruiksgemak (UX). Je maakt producten die mensen willen gebruiken." />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 clip-path-slant-bottom">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-[#9EA700] font-bold uppercase tracking-wider text-sm mb-2">Portfolio</h3>
            <h2 className="text-3xl md:text-4xl font-arial-black text-[#223343] uppercase">Wat maken studenten?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Voorbeelden van recente projecten bij echte opdrachtgevers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {idProjects.map((item, i) => (
              <Article 
                key={i} 
                image={item.image}
                title={item.title}
                description={item.description}
                date={item.label}
                icon={item.icon}
                accentColor="#9EA700" 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-arial-black uppercase text-[#223343]">Hoe ziet een semester eruit?</h2>
          <p className="text-gray-600 mt-2">Van vage vraag tot werkend prototype in 20 weken.</p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            <ProcessStep number="1" title="De Vraag" desc="Een bedrijf pitcht een probleem. Jij vormt een team." />
            <ProcessStep number="2" title="Deep Dive" desc="Je gaat naar buiten. Gebruikers interviewen en observeren." />
            <ProcessStep number="3" title="Ideation" desc="Brainstormen & Prototypen. Wat is de beste oplossing?" />
            <ProcessStep number="4" title="Delivery" desc="Bouwen, testen en het eindproduct opleveren." />
          </div>
        </div>
      </section>

      <div className="bg-[#223343] border-t border-[#9EA700] py-16 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Klaar voor de uitdaging?</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">Innovative Development vraagt initiatief, maar geeft je vrijheid terug.</p>
        <Link href="#" className="bg-[#9EA700] hover:bg-[#8e9600] text-white font-bold py-3 px-8 text-lg transition-colors inline-flex items-center gap-2 rounded-sm shadow-md">
          Bekijk de toelatingseisen <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  )
}

function Badge({ text }: { text: string }) { return <span className="bg-gray-100 text-[#223343] px-3 py-1 text-sm font-bold border border-gray-200 uppercase tracking-wide">{text}</span> }
function OldSchoolItem({ text }: { text: string }) { return <li className="flex items-start gap-3"><div className="mt-1 min-w-[20px]"><div className="w-2 h-2 rounded-full bg-gray-300"></div></div><span className="text-gray-500 line-through decoration-gray-400">{text}</span></li> }
function NewSchoolItem({ text }: { text: string }) { return <li className="flex items-start gap-3"><Check className="text-[#9EA700] min-w-[20px] mt-0.5" size={20} strokeWidth={3} /><span className="text-[#223343] font-medium">{text}</span></li> }
function SkillCard({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) { return <div className="bg-[#1a2836] p-8 border-t-4 border-[#9EA700] hover:bg-[#15202b] transition-colors"><div className="bg-[#223343] w-12 h-12 flex items-center justify-center rounded-sm mb-6 border border-gray-700"><Icon size={24} className="text-[#9EA700]" /></div><h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{title}</h3><p className="text-gray-400 leading-relaxed text-sm">{desc}</p></div> }
function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) { return <div className="bg-white p-6 shadow-md border-b-4 border-gray-200 hover:border-[#9EA700] transition-colors group h-full flex flex-col"><div className="w-10 h-10 rounded-full bg-[#223343] text-white flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-[#9EA700] transition-colors">{number}</div><h3 className="text-lg font-bold text-[#223343] mb-2 uppercase">{title}</h3><p className="text-gray-600 text-sm leading-relaxed">{desc}</p></div> }
