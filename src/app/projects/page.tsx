import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';

type ProjectEntry = {
  term: string;
  slug: string;
  name: string;
  image: string;
};

export default function ProjectsPage() {
  const withBasePath = (src: string) => {
    if (!src) return src;
    if (src.startsWith('http://') || src.startsWith('https://')) return src;

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
    if (basePath && src.startsWith(basePath + '/')) return src;

    const normalized = src.startsWith('/') ? src : `/${src}`;
    return `${basePath}${normalized}`;
  };

  const projectsRoot = path.join(process.cwd(), 'public', 'projects');
  const entries: ProjectEntry[] = [];

  try {
    const terms = fs.existsSync(projectsRoot)
      ? fs.readdirSync(projectsRoot).filter((t) => fs.statSync(path.join(projectsRoot, t)).isDirectory())
      : [];

    for (const term of terms) {
      const termPath = path.join(projectsRoot, term);
      const projects = fs.readdirSync(termPath).filter((p) => fs.statSync(path.join(termPath, p)).isDirectory());
        for (const proj of projects) {
        const base = path.join(termPath, proj);
        type ProjectInfoLite = { project_name?: string; image?: string; [key: string]: unknown };
        let info: ProjectInfoLite | null = null;
        try {
          const infoPath = path.join(base, 'info.json');
          if (fs.existsSync(infoPath)) info = JSON.parse(fs.readFileSync(infoPath, 'utf8')) as ProjectInfoLite;
        } catch {
          info = null;
        }

        const name = info?.project_name ?? proj;
        const rawImage: string | undefined = info?.image;
        const image = rawImage
          ? rawImage.startsWith('/') || /^https?:\/\//.test(rawImage)
            ? rawImage
            : `/projects/${term}/${proj}/${rawImage.replace(/^\.\//, '')}`
          : '/images/file.svg';

        const finalImage = withBasePath(image);

        entries.push({ term, slug: proj, name, image: finalImage });
      }
    }
  } catch {
  }

  const grouped: Record<string, ProjectEntry[]> = entries.reduce((acc, e) => {
    acc[e.term] = acc[e.term] || [];
    acc[e.term].push(e);
    return acc;
  }, {} as Record<string, ProjectEntry[]>);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      {entries.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="space-y-8">
          {Object.keys(grouped).map((term) => (
            <section key={term}>
              <h2 className="text-xl font-semibold mb-3">{term}</h2>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {grouped[term].map((e) => (
                  <Link key={`${e.term}/${e.slug}`} href={`/projects/${e.term}/${e.slug}`} className="block no-underline text-inherit">
                    <article className="border border-gray-200 rounded-none bg-white overflow-hidden flex flex-col items-stretch h-full">
                      <div className="w-full h-40 bg-gray-50 overflow-hidden">
                        <Image src={e.image} alt={e.name} width={480} height={320} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-2 text-center">
                        <span className="text-sm font-medium">{e.name}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
