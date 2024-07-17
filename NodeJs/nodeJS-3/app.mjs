import express from 'express'
import cors from 'cors';
import fs from 'fs'
import moment from 'moment';

const app=express()

app.use(express.json())

app.use(cors({
    origin:true,
    credentials:true,
    methods:`POST,PUT,GET,DELETE`,
    allowedHeaders:`Content-Type, Accept ,Authorization`
}))

app.use((req,res,next)=>{
    const fileName=`Log_`+moment().format(`DD_MM_YYYY`);
    let fileContent=``

    fileContent+=`Method: ${req.method}\n`
    fileContent+=`Route: ${req.url}\n`
    fileContent+=`Time: ${moment().format(`DD/MM/YYYY HH:mm:ss`)}\n`

    fs.mkdirSync(`./logs`, {recursive:true})

    fs.appendFile(`./logs/${fileName}.txt`,`${fileContent} \n`, err=>{
        if (err) {
            console.log(err);
        }
    })
    next()
})

app.listen(8080,()=>{
    console.log(`listening on port 8080`);
})