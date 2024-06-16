const express = require(`express`)

const app = express();

app.listen(3875,()=>{
    console.log(`listening on port 3875`);
});

app.get(`/`, (req,res)=>{
    res.send({
        message:`hello world`
    })
})
app.get(`/students`, (req,res)=>{
    res.send([
        {fistName:`John`, lastName:`Doe`},
        {fistName:`John`, lastName:`Doe`},
        {fistName:`John`, lastName:`Doe`}
    ])
})

app.get(`/testing`, (req,res)=>{
    res.send({
        message:`testing`
    })
})