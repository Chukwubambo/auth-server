const User = require("../models/userModel")



const registerUser = async (request,response) => {
    const {fullName, email, phone, password} = request.body

    const userExists = await User.findOne({email})

    if (userExists){
        response.status(400).json ({
            error: "User already exists"
        })
    }

    const newUser = await User.create({fullName, email, phone, password})

    if(newUser){
        response.status(201).json ({
            message: "User created sucessfully"
        })
    } else {
        response.status(500).json ({
            error: "Invalid user data"
        })

    }



}

module.exports = {registerUser}