import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/$name')({
    component: PostComponent,
})

function PostComponent() {
    const { name } = Route.useParams()
    const [project, setProject] = useState<any | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const modules = import.meta.glob('../pages/*.json') as Record<string, () => Promise<any>>
        const key = `../pages/${name}.json`
        const loader = modules[key]

        if (!loader) {
            setProject(null)
            setLoading(false)
            return
        }

        ;(async () => {
            const mod = await loader()
            setProject((mod && (mod.default ?? mod)) || mod)
            setLoading(false)
        })()
    }, [name])

    if (loading) return <div>Loading…</div>
    if (!project) return <div>Project "{name}" not found. Check /project for available pages.</div>

    return (
        <div>
            <h1>Post {name}</h1>
            <h2>{project.project_name}</h2>
            <p><strong>Coach:</strong> {project.coach}</p>
            <p><strong>Organiser:</strong> {project.organiser}</p>
            <p><strong>Members:</strong> {project.members?.join(', ')}</p>
            <img src={project.image} alt={project.project_name} style={{ maxWidth: 300 }} />
            <pre>{project.description_markdown}</pre>
        </div>
    )
}