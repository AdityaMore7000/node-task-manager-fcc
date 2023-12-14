function getAllTasks(req,res){
    console.log(req.method)
    res.json({msg:'here are all your tasks'})
}
function createTask(req,res){
    console.log(req.method)
    res.json({msg:'Created new task'})
}
function getTask(req,res){
    console.log(req.method)
    res.json({msg:'one task'})
}
function updateTask(req,res){
    console.log(req.method)
    res.json({msg:'updated task'})
}
function deleteTask(req,res){
    console.log(req.method)
    res.json({msg:'deleted task'})
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}