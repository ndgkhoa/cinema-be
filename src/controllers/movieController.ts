import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getMovies = async (req: Request, res: Response) => {
    try {
        const movies = await prisma.movie.findMany()
        res.status(200).json(movies)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch movies' })
    }
}

export const createMovie = async (req: Request, res: Response) => {
    const { title, description, duration, releaseDate, rating, posterUrl } = req.body
    try {
        const newMovie = await prisma.movie.create({
            data: { title, description, duration, releaseDate, rating, posterUrl }
        })
        res.status(201).json(newMovie)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create movie' })
    }
}
