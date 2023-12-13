const express = require('express')
require("dotenv").config();
const taskRoutes = require('./routes/tasks')

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/tasks',taskRoutes)

app.get('/hello',(req,res) =>{
    res.json({msg:"task manager app"})
})

app.listen(port,() =>{
    console.log(`Listening on http://localhost:${port}`)
})
