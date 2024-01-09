import Task from'../models/task.js';

/**
 * 
 * @param {import('express').Response} res 
 * @param {Error} err 
 */
function error(res,err){
    res.status(500).json({msg:err.message})
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res
 * @returns {JSON}
 */
export async function getAllTasks(req,res){
    try{

        const tasks = await Task.find({}); 
        res.json(tasks);
    }
    catch(err){
        error(res,err)
    }
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
        error(res,err)
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
        error(res,err)
    }
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns {JSON}
*/
export async function updateTask(req,res){
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(id,req.body,{
            runValidators:true,
            new:true
        })
        res.status(200).json(task)
    } catch (error) {        
        error(res,err)
    }
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns {JSON}
 */
export async function deleteTask(req,res){
    try{
        const {id} = req.params
        const deletedTask = await Task.findByIdAndDelete(id);
        res.json(deletedTask)
    }
    catch(err){
        error(res,err)
    }
}