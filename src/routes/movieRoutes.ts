import { createMovie, getMovies } from '@/controllers/movieController'
import express from 'express'

const router = express.Router()

router.get('/', getMovies)
router.post('/', createMovie)

export default router
