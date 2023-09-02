import Link from 'next/link'

function NotFound () {
  return (
    <section className='flex h-[calc(100vh-7rem)] justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>
          This is not fine 404
        </h1>
        <p className='text-slate-400'>You are lost 404</p>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif del perro this is fine quemandose vivo' />
        <p className='text-slate-400'>Aquí tienes volver a la home, ¡para que encuentres algo!</p>
        <Link href='/' className='text-slate-400'>Volver a la home</Link>
      </div>
    </section>
  )
}

export default NotFound
