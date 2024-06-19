const express = require(`express`);
const mysql=require(`mysql2`);
const cors = require('cors');
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
app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

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

app.get(`/students/average`,(req,res)=>{
    con.query(`SELECT
                    s.firstName,
                    s.lastName,
                    AVG(tg.grade) AS average
                FROM
                    students AS s
                LEFT JOIN test_grades AS tg
                ON
                    tg.studentId = s.id
                GROUP BY
                    s.id`, (err, result)=>{
        if (err) {
            throw err
        }

        res.send(result);
    })
});

app.get(`/students/city/average`,(req,res)=>{
    con.query('SELECT s.city, AVG(tg.grade) AS average FROM students AS s LEFT JOIN test_grades as tg ON s.id = tg.studentId GROUP BY city;', (err, result)=>{
        if (err) {
            throw err
        }

        res.send(result);
    })
});
app.get(`/students/:id`,(req,res)=>{

    const {id}= req.params;
    con.query(`SELECT * FROM students WHERE id= ?;`,[id], (err, result)=>{
        if (err) {
            throw err
        }

        res.send(result.pop());
    })
});