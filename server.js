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
const authSigninRouter = require('./routes/auth/siginin/authSigin')
const authSignupRourter = require('./routes/auth/signup/authSignup')
const authUsernameRouter = require('./routes/auth/username/username')


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
app.use('/auth', authSigninRouter)
app.use('/auth', authSignupRourter)
app.use('/auth', authUsernameRouter)


app.listen(5000, ()=>{
    console.log("listening on port 5000")
})