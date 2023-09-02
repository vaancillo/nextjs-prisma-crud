import Link from 'next/link'

function AboutPage () {
  return (
    <section className='container mx-auto'>
      <h3 className='text-5xl font-bold mt-5 mb-5'>About</h3>
      <div className='container bg-slate-900'>
        <p className='text-3xl text-slate-300 font-bold'>Esta es una aplicacion sencilla CRUD, Create, Read, Update, Delete de tareas utilizando SQLite, Nextjs, Prisma y Tailwindcss</p>
        <p className='text-slate-500'>Aplicacion desarrollada por <Link href='https://github.com/vaancillo' className='text-slate-400'>Jared Portocarrero</Link></p>
      </div>
    </section>
  )
}

export default AboutPage
