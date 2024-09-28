const express = require('express')
const app = express()
const db = require('./db/db')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}))


// routes
const authRouter = require('./routes/auth')

app.get('/', (req, res)=>{
    res.send("Working...")
})


// end points
app.use('/auth', authRouter)


app.listen(5000, ()=>{
    console.log("listening on port 5000")
})