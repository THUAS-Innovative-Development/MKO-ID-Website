import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/main')({
  component: Main,
})

function Main() {
  return (
    <div className="p-2">
      <h3 className='text-amber-700'>main!</h3>
    </div>
  )
}