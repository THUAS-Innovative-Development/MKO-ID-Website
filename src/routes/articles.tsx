import { createFileRoute } from "@tanstack/react-router";
import { Article } from "../components/article.tsx";

export const Route = createFileRoute("/articles")({
  component: RouteComponent,
});

const testArticles = [
  {
    image: "https://picsum.photos/seed/hhs1/800/600",
    date: "12 november",
    title: "Nieuwe workshops voor creatief talent",
    description:
      "Ontdek de nieuwste reeks creatieve workshops tijdens onze herfsteditie.",
    link: "#",
  },
  {
    image: "https://picsum.photos/seed/hhs2/800/600",
    date: "8 november",
    title: "Tech Innovatiedag 2025",
    description:
      "Beleef een dag vol inspirerende talks, prototypes en innovaties van studenten.",
    link: "#",
  },
  {
    image: "https://picsum.photos/seed/hhs3/800/600",
    date: "3 november",
    title: "Onderzoek naar duurzame mobiliteit",
    description:
      "Studenten presenteren hun bevindingen over mobiliteit in een stedelijke omgeving.",
    link: "#",
  },
  {
    image: "https://picsum.photos/seed/hhs4/800/600",
    date: "29 oktober",
    title: "Kunst en techniek gecombineerd",
    description:
      "Bekijk hoe studenten kunst en technologie samenbrengen in unieke installaties.",
    link: "#",
  },
  {
    image: "https://picsum.photos/seed/hhs5/800/600",
    date: "21 oktober",
    title: "Internationale studentenavond",
    description:
      "Een feestelijke avond waar culturen, muziek en eten samenkomen.",
    link: "#",
  },
  {
    image: "https://picsum.photos/seed/hhs6/800/600",
    date: "14 oktober",
    title: "Masterclass Visuele Communicatie",
    description:
      "Docent Marieke van Aalst geeft een exclusieve masterclass voor ontwerpers.",
    link: "#",
  },
]

function RouteComponent() {
  return (
    <>
      <section className="grid lg:grid-cols-3 grid-cols-1 w-fit gap-6 py-12">
      {testArticles.map((a, i) => (
        <Article key={i} {...a} />
      ))}
      </section>
    </>
  );
}
