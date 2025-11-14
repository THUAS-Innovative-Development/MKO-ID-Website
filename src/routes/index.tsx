import { createFileRoute } from '@tanstack/react-router'
import banner from '../assets/img/dutch_innovation_factory_cover.jpeg';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
    const bannerStyle: React.CSSProperties = {
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "80vh"

    }

    return (
        <div>
            <div className='banner' style={ bannerStyle }>
                <p>aaa</p>
            </div>
        </div>
    )
}