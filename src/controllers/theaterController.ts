import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTheaters = async (req: Request, res: Response) => {
    try {
        const theaters = await prisma.theater.findMany()
        res.json(theaters)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch theaters' })
    }
}

export const createTheater = async (req: Request, res: Response) => {
    const { name, location } = req.body
    try {
        const newTheater = await prisma.theater.create({
            data: { name, location }
        })
        res.status(201).json(newTheater)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create theater' })
    }
}
