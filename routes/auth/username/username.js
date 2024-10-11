const express = require('express')
const router = express.Router()
const User = require('../../../models/auth')


router.post('/username', async (req, res) => {

    try {

        const { username } = req.body

        const usernameResponse = await User.findOne({ username: username })

        if (usernameResponse) {
            res.status(200).send({
                status: "User name exists"
            })

            return
        }

        res.status(404).send({
            status: "username not found"
        })

    } catch (error) {
      console.log(error)
      res.status(500).send({
        status: "Internal Server Error"
      })
    }

})


module.exports = router