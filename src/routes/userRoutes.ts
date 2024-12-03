import { createUser, getUsers } from '@/controllers/userController'
import express from 'express'

const router = express.Router()

router.get('/', getUsers)
router.post('/', createUser)

export default router
