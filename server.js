const express=require('express')
const dotenv=require('dotenv')
const connectDB=require('./config/config')
require('colors')
const morgan=require('morgan')



// config dotenv
dotenv.config()
// connection mongodb

connectDB()

const app=express()

//middlewares

app.use(express.json())
app.use(morgan('dev'))


//route
app.use('/api/menus/',require('./routes/menuroute'))
app.use('/api/users/', require('./routes/userRoutes'))
app.use('/api/orders', require('./routes/orderRoutes'))
app.get("/", (req,res) =>{
    res.send("<h1>Hello Server this side via nodemon sam</h1>")
})

const port=process.env.PORT|| 8080
app.listen(port, ()=>{
     console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white)
})