import express from 'express'
import 'dotenv/config'
import taskRoutes from './routes/tasks.js';
import connectDB from './db/connect.js';
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/tasks',taskRoutes)

app.get('/hello',(req,res) =>{
    res.json({msg:"task manager app"})
})

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_CONNECTION_URI)
        app.listen(port,() =>{
            console.log(`Listening on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();


