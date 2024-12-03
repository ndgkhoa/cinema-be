import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch users' })
    }
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body
    try {
        const newUser = await prisma.user.create({
            data: { name, email, password }
        })
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create user' })
    }
}
