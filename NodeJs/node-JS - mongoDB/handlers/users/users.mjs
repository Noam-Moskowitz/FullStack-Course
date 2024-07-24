import mongoose from 'mongoose'
import {app} from '../../app.mjs'
import { userSchema } from './users.mongo.mjs'
import { guard } from '../guard.mjs'

export const User=mongoose.model('users',userSchema)

app.get('/users', guard,async(req,res)=>{
    res.send(await User.find())
})

app.get('/users/:id',async(req,res)=>{

    const user = await User.findById(req.params.id)

    if (!user){
        return res.status(403).send({message:`user does not exist`})
    }


    res.send(user)
})



app.post(`/users`, async(req,res)=>{

    const {firstName,lastName,email,phone} = req.body;

    const user= new User({ firstName, lastName,  phone, email });

    const newUser= await user.save();

    res.send(newUser)
});

app.put(`/users/:id`,async(req,res)=>{
    const {id}=req.params;
    const {firstName,lastName,email,phone} = req.body;

    const user= await User.findByIdAndUpdate(id,{firstName,lastName,email,phone})

    if (!user){
        return res.status(403).send({message:`user does not exist`})
    }

    res.send(user);

})

app.delete(`/users/:id`,async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)

    res.send()
})