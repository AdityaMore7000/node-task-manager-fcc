import Task from'../models/task.js';

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns {JSON}
 */
export async function getAllTasks(req,res){
    const tasks = await Task.find({}); 
    res.json(tasks);
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns {JSON}
 */
export async function createTask(req,res){
    try{

        const task = await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(err){
        console.error(err)
        res.status(400).json({msg:"Bad Request"})
    }
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns {JSON}
 */
export async function getTask(req,res){
    try{

        const {id} = req.params;
        const task = await Task.findById(id)
        res.json(task)
    }
    catch(err){
        console.error(err)
    }
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns {JSON}
 */
export function updateTask(req,res){
    console.log(req.method)
    res.json({msg:'updated task'})
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns {JSON}
 */
export async function deleteTask(req,res){
    const {id} = req.params
    const deletedTask = await Task.findByIdAndDelete(id);
    res.json(deletedTask)
}