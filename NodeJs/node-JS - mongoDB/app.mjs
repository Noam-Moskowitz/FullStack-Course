import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import session from 'express-session'

const main=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/fullstack-class')
    console.log(`mongo connected on port 27017`);
}

main().catch(err=>console.log(err))

export const app = express()

app.use(express.json())

app.use(session({
    secret: 'ze-lo-meshane',
    name: 'full-stack-session',
    resave: false,
    saveUninitialized: true,
}));

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}))

app.listen(4040,()=>{
    console.log(`listening on port 4040`);
})

app.get('/', (req, res) => {
    if (!req.session.counter) {
        req.session.counter = 0;
    }
    req.session.counter++;
    res.send({
        counter: req.session.counter,
        user: req.session.user,
        message: "Welcome to MongoDB!",
    });
});

import ('./handlers/users/users.mjs');
import (`./handlers/users/auth.mjs`)
