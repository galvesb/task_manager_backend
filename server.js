const dotenv = require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoute')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(taskRoutes)




const PORT = process.env.PORT || 5000
const startServer = async () => {
    try{
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server running on port ${5000}`)
        })
    }catch(error){
        console.log(error)
    }
}
startServer()