const express = require('express')
const Task = require('../model/taskModel')
const router = express.Router()
const mongoose = require('mongoose')
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController')

router.post('/api/tasks', createTask)
router.get('/api/tasks', getTasks)
router.get('/api/tasks/:id', getTask)
router.delete('/api/tasks/:id', deleteTask)
router.patch('/api/tasks/:id', updateTask)

module.exports = router