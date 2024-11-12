import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


// Login User 

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({email});

        if(!user){
            res.json({success: false, message: "User doesn't exists!"})
        } 

        const isMatch = bcrypt.compare(password, user.password);

         if(!isMatch){
            return res.json({success: false, message: "Invalid credentials!"})
         }

         const token = createToken(user._id);

         res.json({success: true, token})
         
        } catch (error) {
            console.log(error);
            res.json({success: false, message: "Error"})
    }
}


// Create Token 
const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}


// Register user

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Checking if user already exists
        const userExists = await userModel.findOne({email})

        if(userExists){
            return res.json({success: false, message: "User already exists"})
        }
        // Validating the correct email format
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Please enter a valid email!"})
        }
        if(password.length < 8){
            return res.json({success: false, message: "Password length must be 8 character long"})
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)


        // Creating user
        const newUser = new userModel({
            name,
            email,
            password: hash,
        }) 

        const user = await newUser.save();
        const token = createToken(user._id)
        res.json({success: true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message: "Error"})
    }
}

export { registerUser, loginUser }