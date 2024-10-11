const express = require('express')
const router = express.Router()
const User = require('../../../models/auth')

router.post('/signup', async (req, res)=>{

    try {
        const {email, fName, lName, password, privacyPolicy, username} = req.body

        const user = await User.findOne({email: email})

        if(user){
            res.status(409).send({
                status: "This Email is Alredy Associated with an Account"
            })
            return
        }else{

            const newUser = new User({
                email,
                fName,
                lName,
                password,
                privacyPolicy,
                username
            })

            await newUser.save()

            res.status(200).send({
                status: "Sucessfully Created!"
            })
        }

    } catch (error) {
        console.error(error);
        res.status(500).send({
            status: "Internal Server Error"
        })
    }

})


module.exports = router