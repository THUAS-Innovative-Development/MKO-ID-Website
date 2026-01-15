import fs from "fs";
import path from "path";
import Link from "next/link";
import { Article } from "@/src/components/Article";

type ProjectEntry = {
  term: string;
  slug: string;
  name: string;
  image: string;
  date: string;
  description: string;
};

export default function ProjectsPage() {
  const withBasePath = (src: string) => {
    if (!src) return src;
    if (src.startsWith("http://") || src.startsWith("https://")) return src;

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    if (basePath && src.startsWith(basePath + "/")) return src;

    const normalized = src.startsWith("/") ? src : `/${src}`;
    return `${basePath}${normalized}`;
  };

  const extractTeaserFromMarkdown = (md: string, maxLen = 160) => {
    const lines = md.split(/\r?\n/);

    const paraLines: string[] = [];
    let started = false;

    for (const raw of lines) {
      const line = raw.trim();

      if (!started) {
        if (!line) continue;
        if (line.startsWith("#")) continue;

        started = true;
        paraLines.push(line);
        continue;
      }

      if (!line) break;
      if (line.startsWith("#")) break;

      paraLines.push(line);
    }

    const text = paraLines.join(" ").replace(/\s+/g, " ").trim();
    if (!text) return "";
    return text.length > maxLen
      ? text.slice(0, maxLen - 1).trimEnd() + "…"
      : text;
  };

  const toIsoDate = (d: Date) => d.toISOString().slice(0, 10);

  const projectsRoot = path.join(process.cwd(), "public", "projects");
  const entries: ProjectEntry[] = [];

  try {
    const terms = fs.existsSync(projectsRoot)
      ? fs
          .readdirSync(projectsRoot)
          .filter((t) => fs.statSync(path.join(projectsRoot, t)).isDirectory())
      : [];

    for (const term of terms) {
      const termPath = path.join(projectsRoot, term);
      const projects = fs
        .readdirSync(termPath)
        .filter((p) => fs.statSync(path.join(termPath, p)).isDirectory());

      for (const proj of projects) {
        const base = path.join(termPath, proj);

        type ProjectInfoLite = {
          project_name?: string;
          image?: string;
          date?: string;
          description?: string;
          [key: string]: unknown;
        };

        let info: ProjectInfoLite | null = null;

        try {
          const infoPath = path.join(base, "info.json");
          if (fs.existsSync(infoPath)) {
            info = JSON.parse(
              fs.readFileSync(infoPath, "utf8")
            ) as ProjectInfoLite;
          }
        } catch {
          info = null;
        }

        const name = info?.project_name ?? proj;

        const rawImage: string | undefined = info?.image;
        const image = rawImage
          ? rawImage.startsWith("/") || /^https?:\/\//.test(rawImage)
            ? rawImage
            : `/projects/${term}/${proj}/${rawImage.replace(/^\.\//, "")}`
          : "/images/file.svg";

        const finalImage = withBasePath(image);

        let description = (info?.description ?? "").trim();
        const descPath = path.join(base, "description.md");
        if (!description && fs.existsSync(descPath)) {
          const md = fs.readFileSync(descPath, "utf8");
          description = extractTeaserFromMarkdown(md);
        }
        if (!description) description = proj;

        let date = (info?.date ?? "").trim();
        if (!date) {
          try {
            const stat = fs.existsSync(descPath)
              ? fs.statSync(descPath)
              : fs.statSync(base);
            date = toIsoDate(stat.mtime);
          } catch {
            date = "";
          }
        }

        entries.push({
          term,
          slug: proj,
          name,
          image: finalImage,
          date,
          description,
        });
      }
    }
  } catch {}

  const grouped: Record<string, ProjectEntry[]> = entries.reduce(
    (acc, e) => {
      acc[e.term] = acc[e.term] || [];
      acc[e.term].push(e);
      return acc;
    },
    {} as Record<string, ProjectEntry[]>
  );

    return (
    <main className="l-page">
      <section className="l-container l-section">
        <h1 className="t-h2 mb-6">Projects</h1>

        {entries.length === 0 ? (
          <p className="t-body">No projects found.</p>
        ) : (
          <div className="space-y-10">
            {Object.keys(grouped).map((term) => (
              <section key={term}>
                <h2 className="t-h3 normal-case tracking-normal mb-4">
                  {term}
                </h2>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                  {grouped[term].map((e) => (
                    <Link
                      key={`${e.term}/${e.slug}`}
                      href={`/projects/${e.term}/${e.slug}`}
                      className="block"
                    >
                      <Article
                        image={e.image}
                        title={e.name}
                        description={e.description}
                        date={e.date}
                      />
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
