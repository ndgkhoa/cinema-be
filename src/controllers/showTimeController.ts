import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getShowTimes = async (req: Request, res: Response) => {
    try {
        const showTimes = await prisma.showTime.findMany({
            include: {
                movie: true,
                room: true
            }
        })
        res.json(showTimes)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch showtimes' })
    }
}

export const createShowTime = async (req: Request, res: Response) => {
    const { movieId, roomId, startTime, endTime } = req.body
    try {
        const newShowTime = await prisma.showTime.create({
            data: {
                movieId,
                roomId,
                startTime: new Date(startTime),
                endTime: new Date(endTime)
            }
        })
        res.status(201).json(newShowTime)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create showtime' })
    }
}

export const getShowTimeById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const showTime = await prisma.showTime.findUnique({
            where: { id: Number(id) }
        })
        if (!showTime) {
            res.status(404).json({ error: 'ShowTime not found' })
            return
        }
        res.status(200).json(showTime)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch showtime' })
    }
}

export const deleteShowTime = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const deletedShowTime = await prisma.showTime.delete({
            where: { id: Number(id) }
        })
        res.json(deletedShowTime)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to delete showtime' })
    }
}
