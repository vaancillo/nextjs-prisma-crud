'use client'
import { useRouter } from 'next/navigation'

function TaskCard ({ task }) {
  const router = useRouter()
  return (
    <div
      className='bg-slate-800 p-3 hover:bg-slate-900 hover:cursor-pointer rounded-lg' onClick={() => {
        router.push(`/task/edit/${task.id}`)
      }}
    >
      <h3 className='font-bold text-2xl mb-2'>Titulo: {task.title}</h3>
      <p>Descripcion: {task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  )
}

export default TaskCard
