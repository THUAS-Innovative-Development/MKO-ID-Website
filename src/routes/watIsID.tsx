import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/watIsID')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3 className='text-amber-700'>Welcome WatisId!</h3>
    </div>
  )
}