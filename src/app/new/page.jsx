"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleDelete = async () => {
    const res = await fetch(`/api/task/${params.id}`, {
      method: "DELETE",
    })
    const data = await res.json()
    router.refresh()
    router.push('/') 
  }

  useEffect(() => {
    if(params.id) {
      fetch(`/api/task/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title)
        setDescription(data.description)
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(params.id) {
      
      const res = await fetch(`/api/task/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({title, description}),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await res.json()
      console.log('data', data);
    } else {
      const res = await fetch('/api/task', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
    }
    router.refresh()
    router.push('/');
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10" onSubmit={handleSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripcion de la tarea
        </label>
        <textarea
          rows="3"
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
          <div className='flex justify-between'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>
          Crear
        </button>
        {
          params.id && (
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4' type='button' onClick={handleDelete}>
              Eliminar
            </button>
          )
        }
          </div>
      </form>
    </div>
  );
}

export default NewPage;
