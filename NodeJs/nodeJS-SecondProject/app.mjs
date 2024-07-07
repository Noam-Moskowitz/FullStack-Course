import express from 'express';
import cors from 'cors';


export const app = express();

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));


app. listen(4000, ()=>{
    console.log(`server is running on port 4000`);
})


app.get(`/`,(req,res)=>{
    res.send({
        message:`hello`
    })
})

import(`./handlers/files.mjs`)