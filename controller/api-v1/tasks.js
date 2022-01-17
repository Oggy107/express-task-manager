const task = require('../../models/tasks');

const getTasks = (req, res, next) => {
    task.find({}).then(tasks => {
        res.json({success: true, data: tasks});
    }).catch(error => {
        next({status: 500, msg: error.message});
    })
};

const getSingleTask = (req, res, next) => {
    task.findById(req.params.id).then(task => {
        res.json({success: true, data: task});
    }).catch(error => {
        next({status: 400, msg: error.message});
    })
};

const createTask = (req, res, next) => {
    task.create({name: req.body.name}).then(task => {
        res.status(201).json({success: true, task});
    }).catch(error => {
        next({status: 400, msg: error.message});
    });
};

const updateTask = (req, res, next) => {
    if (!req.body.name || !req.body.completed)
        return next({status: 400, msg: "values for name and completed must be supplied"});

    task.updateOne({_id: req.params.id}, {name: req.body.name, completed: req.body.completed}).then(result => {
        res.json({success: true, result});
    }).catch(error => {
        next({status: 400, msg: error.message});
    })
};

const deleteTask = (req, res, next) => {
    task.deleteOne({_id: req.params.id}).then(result => {
        res.json({success: true, result});
    }).catch(error => {
        next({status: 400, msg: error.message});
    })
};

module.exports = {
    getTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}