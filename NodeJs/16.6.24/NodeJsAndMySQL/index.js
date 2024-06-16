const express = require(`express`);
const mysql=require(`mysql2`);
const app = express();

const con = mysql.createConnection({
    host:`localhost`,
    user:`root`,
    password:``,
    database:`fullstack-w210523er`
});

con.connect(err=>{
    if (err) {
        throw err;
    }

    console.log(`connection succesful`);
});

app.listen(4000,()=>{
    console.log(`listening at port 4000`);
})

app.get(`/`,(req,res)=>{
    res.send({
        message:`This is the home page`
    })
});


app.get(`/students`,(req,res)=>{
    con.query('SELECT * FROM `students`', (err, result)=>{
        if (err) {
            throw err
        }

        res.send(result);
    })
});