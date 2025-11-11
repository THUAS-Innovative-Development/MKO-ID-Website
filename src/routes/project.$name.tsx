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

    if (loading) return <div>Laden…</div>
    if (!project) return <div>Project "{name}" is niet gevonden.</div>

    return (
        <></>
    )
}