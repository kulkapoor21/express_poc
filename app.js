import { config } from 'dotenv'
import express from 'express'
import BodyParser from 'body-parser'
import connectDB from './db/db.js'
import bookRoutes from './routes/bookRoutes.js'
import employeeRoutes from './routes/employeeRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

const app = express()
config()
connectDB()
app.use(cors(), BodyParser.urlencoded({ extended: false }), BodyParser.json())
app.use('/book', bookRoutes)
app.use('/employee', employeeRoutes)
app.use('/user', userRoutes)
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))