import { Router } from 'express'
import { getSeats, createSeat } from '../controllers/seatController'

const router = Router()

router.get('/', getSeats)
router.post('/', createSeat)

export default router
