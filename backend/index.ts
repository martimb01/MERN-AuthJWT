import express from 'express'
import connectToDB from './db'
import {router as userRouter} from './routes/userRoute'
import {router as messageRouter} from './routes/messageRoute'
import cors from 'cors'
require('dotenv').config()


// setting up express app
const app = express()
app.use(express.json())
app.use(cors())


//Server routes
app.use('/user', userRouter)
app.use('/message', messageRouter)

//Server setup
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server listening on port: ' + port )
    connectToDB()
})