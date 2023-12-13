function getAllTasks(req,res){
    res.json({msg:'here are all your tasks'})
}
function createTask(req,res){
    res.json({msg:'Created new task'})
}
function getTask(req,res){
    res.json({msg:'one task'})
}
function updateTask(req,res){
    res.json({msg:'updated task'})
}
function deleteTask(req,res){
    res.json({msg:'deleted task'})
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}