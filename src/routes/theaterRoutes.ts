import { Router } from 'express'
import { getTheaters, createTheater } from '../controllers/theaterController'

const router = Router()

router.get('/', getTheaters)
router.post('/', createTheater)

export default router
