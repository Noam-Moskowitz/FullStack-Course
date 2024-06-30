const express = require(`express`);
const mysql=require(`mysql2`);
const cors = require('cors');
const app = express();
app.use(express.json())

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
                    s.id,
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

    con.query(`SELECT * FROM students WHERE students.id = ?;`,[id], (err, user)=>{

        if (err) {
            throw err
        }


    con.query(`
        SELECT 
            test_grades.id, tests.name, test_grades.grade 
        FROM 
            test_grades 
        LEFT JOIN 
            tests 
        ON 
            tests.id = test_grades.testId 
        WHERE 
            test_grades.studentId = ?;`,[id], (err, grades)=>{
        if (err) {
            throw err
        }

        res.send({
            user,
            grades
        });
    })
})
});

app.put("/students/:studentId", (req, res) => {
    const { studentId } = req.params;
    const grades = req.body;
    for (const g of grades) {
        con.query("UPDATE test_grades SET grade = ? WHERE id = ? AND studentId = ?", [g.grade, g.id, studentId]);
    }
    
    res.end();
});

app.get(`/dashboard/students/amount`, (req,res)=>{
    con.query(`SELECT COUNT(*) amount FROM students`,(err, result)=>{
        if (err) {
            throw err;
        }

        res.send(result[0].amount.toString());
    })
})

app.get(`/dashboard/cities/amount`, (req,res)=>{
    con.query(`SELECT COUNT(DISTINCT city) amount FROM students`,(err, result)=>{
        if (err) {
            throw err;
        }

        res.send(result[0].amount.toString());
    })
})

app.get(`/dashboard/tests/avg`, (req,res)=>{
    con.query(`SELECT AVG(grade) avg  FROM test_grades`,(err, result)=>{
        if (err) {
            throw err;
        }

        res.send(result[0].avg.toString());
    })
})
app.get(`/dashboard/stuents/grades/highest`, (req,res)=>{
    con.query(`SELECT
                    s.firstName,
                    s.lastName,
                    AVG(tg.grade) grade
                FROM
                    test_grades AS tg
                LEFT JOIN students AS s
                ON
                    s.id = tg.studentId
                GROUP BY
                    s.id
                ORDER BY
                    grade
                DESC
                LIMIT 1;
`,(err, result)=>{
        if (err) {
            throw err;
        }

        res.send(result.pop());
    })
})

app.get(`/dashboard/tests/avg`, (req,res)=>{
    con.query(`SELECT AVG(grade) avg  FROM test_grades`,(err, result)=>{
        if (err) {
            throw err;
        }

        res.send(result[0].avg.toString());
    })
})
app.get(`/dashboard/cities/grades/highest`, (req,res)=>{
    con.query(`SELECT
                    s.city,
                    AVG(tg.grade) grade
                FROM
                    test_grades AS tg
                LEFT JOIN students AS s
                ON
                    s.id = tg.studentId
                GROUP BY
                    s.id
                ORDER BY
                    grade
                DESC
                LIMIT 1;
`,(err, result)=>{
        if (err) {
            throw err;
        }

        res.send(result.pop());
    })
})
app.get(`/dashboard/students/birthday`, (req,res)=>{
    con.query(`SELECT 
                firstName, 
                lastName, 
                TIMESTAMPDIFF(YEAR, birthday,
                CURDATE()) AS age 
            FROM 
                students 
            WHERE MONTH(birthday) = MONTH(CURRENT_DATE);
`,(err, result)=>{
        if (err) {
            throw err;
        }

        res.send(result);
    })
})
app.get(`/tests`, (req,res)=>{
    con.query(`  SELECT
            t.id,
            t.name,
            AVG(tg.grade)
        FROM
            tests AS t
        LEFT JOIN test_grades AS tg
        ON
            t.id = tg.testId
        GROUP BY
            t.id`,(err, result)=>{
        if (err) {
            throw err;
        }

        res.send(result);
    })
})