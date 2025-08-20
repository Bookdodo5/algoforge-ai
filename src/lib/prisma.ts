import { PrismaClient } from '@prisma/client'

const isDevelopment = process.env.NODE_ENV === 'development'

let prisma: PrismaClient

if (isDevelopment) {
    if (!(global as any).prisma) {
        (global as any).prisma = new PrismaClient()
    }
    prisma = (global as any).prisma
} else {
    prisma = new PrismaClient()
}

export { prisma }