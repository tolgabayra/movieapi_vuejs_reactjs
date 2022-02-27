const User = require("../models/User")
const jwt = require("jsonwebtoken")

const register = async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
  }


const login = async (req,res) => {
  try {
      const user = await User.findOne({email: req.body.email, password: req.body.password})
      if (user !== null) {
          const accesToken = jwt.sign({name: user.username, ...user},"mySecretKey",{expiresIn: "1w"})
          const refreshToken = jwt.sign({name: user.username, ...user},"mySecretKey")
          delete user.password
          
          res.status(200).json({
              user,
              accesToken,
              refreshToken
          })

      } else {
          res.status(404).json("User not found !")
      }
  } catch (err) {
      res.status(500).json(err)
  }
}


module.exports = {
    register,
    login
}