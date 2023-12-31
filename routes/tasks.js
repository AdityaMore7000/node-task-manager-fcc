import express from 'express'
const router = express.Router()
import {createTask,getAllTasks,getTask,deleteTask,updateTask} from '../controllers/tasks.js'
router.route('/')
    .get(getAllTasks)
    .post(createTask)

router.route('/:id')
.get(getTask)
.patch(updateTask)
.delete(deleteTask)

export default router;