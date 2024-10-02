const express = require('express')
const app = express()
const db = require('./db/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

app.use(bodyParser.json())
app.use(passport.initialize())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}))


// routes
const authRouter = require('./routes/auth/auth')


// Middlware

const logRequest=(req, res, next)=>{
   console.log(`${new Date().toLocaleString()} Request made to: ${req.originalUrl}`);
   next()
}

app.use(logRequest)

app.get('/', (req, res)=>{
    res.send("Express JS is running...")
})


// end points
app.use('/auth', authRouter)


app.listen(5000, ()=>{
    console.log("listening on port 5000")
})