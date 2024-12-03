import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getSeats = async (req: Request, res: Response) => {
    try {
        const seats = await prisma.seat.findMany()
        res.json(seats)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch seats' })
    }
}

export const createSeat = async (req: Request, res: Response) => {
    const { roomId, seatNumber, type } = req.body
    try {
        const newSeat = await prisma.seat.create({
            data: { roomId, seatNumber, type }
        })
        res.status(201).json(newSeat)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create seat' })
    }
}
