import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function main (): Promise<any> {
  try {
    const users = await prisma.user.findMany()
    console.log('Usuários encontrados:', users)
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
  } finally {
    await prisma.$disconnect()
  }
}
