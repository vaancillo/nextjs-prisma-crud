import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export async function GET (request, { params }) {
  // consulto la tarea y la encuentro
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id)
    }
  })
  // devuelve la tarea encontrada
  return NextResponse.json(task)
}

export async function PUT (request, { params }) {
  // actualizo el estado de la tarea
  const data = await request.json()
  // obteniendo la tarea actualizada 😎
  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(params.id)
    },
    data

  })
  return NextResponse.json(taskUpdated)
}

export async function DELETE (request, { params }) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id)
      }
    })
    console.log(taskRemoved)
    return NextResponse.json(taskRemoved)
  } catch (error) {
    return NextResponse.json(error.message)
  }
}
