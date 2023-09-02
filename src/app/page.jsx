import {prisma} from '@/libs/prisma'

async function loadTask() {
  // fetch a nuestro propio backend

  // const res = await fetch('http://localhost:3000/api/task')
  // const data = await res.json()

  // obteniendo directamente desde la base de datos
  return await prisma.task.findMany()
}

async function HomePage() {
  const task = await loadTask()
  console.log(task)
  return (
    // renderizando las tareas traidas desde la bd
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
      {task.map(task => (
        <div key={task.id} className='bg-slate-800 p-3 hover:bg-slate-900 hover:cursor-pointer'>
          <h3 className='font-bold text-2xl mb-2'>Titulo: {task.title}</h3>
          <p>Descripcion: {task.description}</p>
          <p>{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
    </section>
  )
}

export default HomePage