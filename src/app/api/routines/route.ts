import { NextResponse } from 'next/server'

const ROUTINES = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  name: `Routine ${index + 1}`,
}))

export const GET = async () => {
  return Response.json(ROUTINES)
}

export const POST = async (request: Request) => {
  return new NextResponse('asdok')
}

export const DELETE = async () => {
  return Response.json({
    result: 'ok',
  })
}
