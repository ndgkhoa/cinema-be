import express from 'express'
import userRoutes from './routes/userRoutes'
import movieRoutes from './routes/movieRoutes'
import theaterRoutes from './routes/theaterRoutes'
import seatRoutes from './routes/seatRoutes'
import showTimeRoutes from './routes/showTimeRoutes'
import roomRoutes from './routes/roomRoutes'
import ticketRoutes from './routes/ticketRoutes'

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/theaters', theaterRoutes)
app.use('/api/seats', seatRoutes)
app.use('/api/showtimes', showTimeRoutes)
app.use('/api/rooms', roomRoutes)
app.use('/api/tickets', ticketRoutes)

export default app
