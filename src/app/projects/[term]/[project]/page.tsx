import fs from 'fs';
import path from 'path';
import MDComponents from '../../../../utils/MDComponents';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Params = { term: string; project: string };

interface ProjectInfo {
  project_name?: string;
  members?: string[] | string;
  coach?: string;
  organiser?: string;
  image?: string;
  year?: string | number;
  tags?: string[];
  [key: string]: unknown;
}

export async function generateStaticParams() {
  const projectsDir = path.join(process.cwd(), 'public', 'projects');
  const params: Params[] = [];
  try {
    const terms = fs.readdirSync(projectsDir).filter((t) => fs.statSync(path.join(projectsDir, t)).isDirectory());
    for (const term of terms) {
      const termPath = path.join(projectsDir, term);
      const projects = fs.readdirSync(termPath).filter((p) => fs.statSync(path.join(termPath, p)).isDirectory());
      for (const project of projects) {
        params.push({ term, project });
      }
    }
  } catch (e) {
    console.error('generateStaticParams error', e);
  }
  return params.map((p) => ({ term: p.term, project: p.project }));
}

export default async function ProjectPage({ params }: { params: Params | Promise<Params> }) {
  const { term, project } = await params;
  const base = path.join(process.cwd(), 'public', 'projects', term, project);

  const withBasePath = (src: string) => {
    if (!src) return src;
    if (src.startsWith('http://') || src.startsWith('https://')) return src;

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
    if (basePath && src.startsWith(basePath + '/')) return src;

    const normalized = src.startsWith('/') ? src : `/${src}`;
    return `${basePath}${normalized}`;
  };

  let info: ProjectInfo | null = null;
  let markdownContent = '';
  try {
    const infoPath = path.join(base, 'info.json');
    if (fs.existsSync(infoPath)) {
      info = JSON.parse(fs.readFileSync(infoPath, 'utf8')) as ProjectInfo;
    }
    const mdPath = path.join(base, 'description.md');
    if (fs.existsSync(mdPath)) {
      markdownContent = fs.readFileSync(mdPath, 'utf8');
    }
  } catch (e) {
    console.error('Error reading project files', e);
  }
  const resolveImage = (img?: string | null) => {
    if (!img) return null;
    // absolute or remote
    if (/^(https?:)?\/\//.test(img) || img.startsWith('/')) return img;
    // relative path (like ./assets/foo.jpg) -> serve from /projects/{term}/{project}/...
    return `/projects/${term}/${project}/${img.replace(/^\.\//, '')}`;
  };

  const imageSrc = resolveImage(info?.image ?? null);
  const finalImageSrc = imageSrc ? withBasePath(imageSrc) : null;

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4">{info?.project_name ?? project}</h1>

      {finalImageSrc && (
        <div className="w-full aspect-3/2 bg-gray-50 overflow-hidden max-h-72 md:max-h-96 mb-4">
          <Image src={finalImageSrc} alt={info?.project_name ?? project} width={1200} height={800} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Metadata block */}
      <div className="mb-6 text-sm text-gray-700 space-y-2">
        {info?.organiser && (
          <div>
            <strong className="mr-2">Organiser:</strong>
            <span>{info.organiser}</span>
          </div>
        )}

        {info?.coach && (
          <div>
            <strong className="mr-2">Coach:</strong>
            <span>{info.coach}</span>
          </div>
        )}

        {info?.members && (
          <div>
            <strong className="mr-2">Members:</strong>
            <span>{Array.isArray(info.members) ? info.members.join(', ') : info.members}</span>
          </div>
        )}

        {info?.year && (
          <div>
            <strong className="mr-2">Year:</strong>
            <span>{info.year}</span>
          </div>
        )}

        {info?.tags && Array.isArray(info.tags) && (
          <div>
            <strong className="mr-2">Tags:</strong>
            <span>{info.tags.join(', ')}</span>
          </div>
        )}

        {/* render any other fields from info.json */}
        {info &&
          Object.keys(info)
            .filter((k) => !['project_name', 'image', 'members', 'coach', 'organiser', 'year', 'tags'].includes(k))
            .map((k) => (
              <div key={k}>
                <strong className="mr-2">{k.replace(/_/g, ' ')}:</strong>
                <span>{typeof info[k] === 'object' ? JSON.stringify(info[k]) : String(info[k])}</span>
              </div>
            ))}
      </div>

      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={MDComponents(`/projects/${term}/${project}`)}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </main>
  );
}
