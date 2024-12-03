import { Router } from 'express'
import { getShowTimes, createShowTime, getShowTimeById, deleteShowTime } from '../controllers/showTimeController'

const router = Router()

router.get('/', getShowTimes)
router.post('/', createShowTime)
router.get('/:id', getShowTimeById)
router.delete('/:id', deleteShowTime)

export default router
