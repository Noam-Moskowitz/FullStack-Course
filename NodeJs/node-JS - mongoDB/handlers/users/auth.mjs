import { app } from "../../app.mjs";
import { JWT_SECRET } from "../../config.mjs";
import { User } from "./users.mjs";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

app.post(`/login`,async (req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email})

    if (!user) {
        return res.status(403).send(`email or password is incorrect!`)
    }
    if (!user.password|| !await bcrypt.compare(password,user.password)) {
        return res.status(403).send(`email or password is incorrect!`)
    }

    const tokenPayload={
        firstName:user.firstName,
        lastName:user.lastName,
        _id:user._id
    }

    const token=jwt.sign(tokenPayload,JWT_SECRET,{expiresIn:`1h`})

    res.send(token)
})

app.post(`/signup`, async (req,res)=>{

    const {firstName,lastName,email,phone, password} = req.body;
    
    if (await User.findOne({email})){
        return res.status(403).send(`email already in use!`)
    }

    const user= new User({ 
        firstName,
        lastName,
        phone,
        email,
        password: await bcrypt.hash(password,10)
    });

    const newUser= await user.save();

    res.send(newUser)

})

app.get(`/login`,(req,res)=>{
   /*  if (req.session.user){
        res.send(req.session.user)
    }else{
        res.status(401).send(`user is not logged in`)
    }

    res.end() */
   res.status(401).send('user not logged in')

})

app.get(`/logout`,(req,res)=>{
    /* delete req.session.user

    res.end() */
})