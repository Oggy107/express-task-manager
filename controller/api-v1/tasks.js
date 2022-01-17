const task = require('../../models/tasks');

const getTasks = (req, res) => {
    task.find({}).then(tasks => {
        res.json({success: true, data: tasks});
    }).catch(error => {
        res.status(404).json({success: false, msg: error.message});
    })
};

const getSingleTask = (req, res) => {
    task.findById(req.params.id).then(task => {
        res.json({success: true, data: task});
    }).catch(error => {
        res.status(404).json({success: false, msg: error.message});
    })
};

const createTask = (req, res) => {
    // if (!req.body.name)
    // {
    //     res.status(404).json({sucess: false, msg: "missing name value"});
    //     return;
    // }

    task.create({name: req.body.name}).then(task => {
        res.json({success: true, task});
    }).catch(error => {
        res.status(404).json({success: false, msg: error.message});
    });
};

const updateTask = (req, res) => {
    if (!req.body.name || !req.body.completed)
    {
        res.status(404).json({sucess: false, msg: "values for name and completed must be supplied"});
        return;
    }

    task.updateOne({_id: req.params.id}, {name: req.body.name, completed: req.body.completed}).then(result => {
        res.json({success: true, result});
    }).catch(error => {
        res.status(404).json({success: false, msg: error.message});
    })
};

const deleteTask = (req, res) => {
    task.deleteOne({_id: req.params.id}).then(result => {
        res.json({success: true, result});
    }).catch(error => {
        res.status(404).json({success: false, msg: error.message});
    })
};

module.exports = {
    getTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}