const express = require('express')
const router = express.Router()
const User = require('../../../models/auth')
const otp = require('../otp/otp')

const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
};

let otpCode = ''


router.post('/signup', async (req, res) => {

    try {
        const { email, fName, lName, password, privacyPolicy, username } = req.body

        const user = await User.findOne({ email: email })

        if (user) {
            res.status(409).send({
                status: "This Email is Alredy Associated with an Account"
            })
            return
        } else {

            const newUser = new User({
                email,
                fName,
                lName,
                password,
                privacyPolicy,
                username
            })

            await newUser.save()

            try {

                otpCode = generateOTP();

                otp('faizmahmood018@gmail.com', fName, otpCode)
                console.log('Email sent:');
            } catch (error) {
                console.error('Error sending email:', error);
            }


            res.status(200).send({
                status: "Sucessfully Created!",
                otp: otpCode
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