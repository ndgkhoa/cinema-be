import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getRooms = async (req: Request, res: Response) => {
    try {
        const rooms = await prisma.room.findMany()
        res.status(200).json(rooms)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch rooms' })
    }
}

export const createRoom = async (req: Request, res: Response) => {
    const { name, seatCapacity, theaterId } = req.body
    try {
        const newRoom = await prisma.room.create({
            data: { name, seatCapacity, theaterId }
        })
        res.status(201).json(newRoom)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create room' })
    }
}

export const updateRoom = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, seatCapacity, theaterId } = req.body

    try {
        const updatedRoom = await prisma.room.update({
            where: { id: Number(id) },
            data: { name, seatCapacity, theaterId }
        })
        res.status(200).json(updatedRoom)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to update room' })
    }
}

export const deleteRoom = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const deletedRoom = await prisma.room.delete({
            where: { id: Number(id) }
        })
        res.status(200).json({ message: `Room with ID ${id} deleted successfully`, deletedRoom })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to delete room' })
    }
}
