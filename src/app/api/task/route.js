import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export async function GET () {
  // consulta a base de datos
  const task = await prisma.task.findMany()
  return NextResponse.json(task)
}

export async function POST (request) {
  const { title, description } = await request.json()
  // inserta en la bd el nuevo registro
  const newTask = await prisma.task.create({
    data: {
      title,
      description
    }
  })
  return NextResponse.json(newTask)
}
