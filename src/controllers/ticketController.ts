import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTickets = async (req: Request, res: Response) => {
    try {
        const tickets = await prisma.ticket.findMany()
        res.status(200).json(tickets)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch tickets' })
    }
}

export const createTicket = async (req: Request, res: Response) => {
    const { userId, showTimeId, seatId, price, status } = req.body
    try {
        const newTicket = await prisma.ticket.create({
            data: { userId, showTimeId, seatId, price, status }
        })
        res.status(201).json(newTicket)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create ticket' })
    }
}

export const updateTicket = async (req: Request, res: Response) => {
    const { id } = req.params
    const { userId, showTimeId, seatId, price, status } = req.body

    try {
        const updatedTicket = await prisma.ticket.update({
            where: { id: Number(id) },
            data: { userId, showTimeId, seatId, price, status }
        })
        res.status(200).json(updatedTicket)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to update ticket' })
    }
}

export const deleteTicket = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const deletedTicket = await prisma.ticket.delete({
            where: { id: Number(id) }
        })
        res.status(200).json({ message: `Ticket with ID ${id} deleted successfully`, deletedTicket })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to delete ticket' })
    }
}
