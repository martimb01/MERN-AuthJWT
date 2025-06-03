import express from 'express'
import connectToDB from './db'
import {router as userRouter} from './routes/userRoute' 
require('dotenv').config()


// setting up express app
const app = express()
app.use(express.json())


//Server routes
app.use('/user', userRouter)

//Server setup
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server listening on port: ' + port )
    connectToDB()
})