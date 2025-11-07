import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const ProjectsRoute = createFileRoute('/project' as any)({
    component: ProjectsList,
})

function ProjectsList() {
    const [pages, setPages] = useState<{ name: string; data: any }[] | null>(null)

    useEffect(() => {
        const modules = import.meta.glob('../pages/*.json') as Record<string, () => Promise<any>>
        ;(async () => {
            const entries = await Promise.all(
                Object.entries(modules).map(async ([path, loader]) => {
                    const mod = await loader()
                    const name = path.split('/').pop()!.replace(/\.json$/, '')
                    const data = (mod && (mod.default ?? mod)) || mod
                    return { name, data }
                })
            )
            setPages(entries)
        })()
    }, [])

    if (pages === null) return <div>Loading projects…</div>
    if (pages.length === 0) return <div>No projects found.</div>

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {pages.map(p => (
                    <li key={p.name}>
                        <a href={`/project/${encodeURIComponent(p.name)}`}>
                            {p.data?.project_name ?? p.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}