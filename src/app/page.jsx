import { prisma } from '@/libs/prisma'
import TaskCard from '@/components/TaskCard'

async function loadTask () {
  // fetch a nuestro propio backend

  // const res = await fetch('http://localhost:3000/api/task')
  // const data = await res.json()

  // obteniendo directamente desde la base de datos
  return await prisma.task.findMany()
}

async function HomePage () {
  const task = await loadTask()
  console.log(task)
  return (
    // renderizando las tareas traidas desde la bd
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
        {task.map(task => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
