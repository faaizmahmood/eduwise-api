const express = require('express')
const router = express.Router()
const User = require('../models/auth')

router.post('/signin', async (req, res) => {
    try {

        const { email, password } = req.body;

        console.log(email)

        const userData = await User.findOne({email: email})

        if(userData.password === password){
            res.status(200).json(userData)
        }else if(userData.password !== password){
            res.status(401).json({
                error: "Password is incorrect"
            })
        } 

        if(userData === null){
            res.status(404).json({
                error: "user is incorrect"
            })
        }
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })
    }

})


module.exports = router