const express = require('express');

const {
    getTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
} = require('../../controller/api-v1/tasks');

const router = express.Router();

router.route('/api/v1/tasks').get(getTasks).post(createTask);
router.route('/api/v1/tasks/:id').get(getSingleTask).put(updateTask).delete(deleteTask);

module.exports = router;