import mongoose from 'mongoose'
import {app} from '../../app.mjs'
import { userSchema } from './users.mongo.mjs'

const User=mongoose.model('users',userSchema)

app.get('/users',async(req,res)=>{
    res.send(await User.find())
})

app.use((req,res,next)=>{
    console.log(req.body);
    next()
})

app.post(`/users`, async (req,res)=>{

    const {firstName,lastName,email,phone}= req.body;

    const user= new User({ firstName, lastName, email, phone });

    const newUser= await user.save();

    res.send(newUser)
})