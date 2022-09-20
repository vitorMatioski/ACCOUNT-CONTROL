"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_js_1 = __importDefault(require("../models/Task.js"));
class taskController {
}
taskController.showTasks = (req, res) => {
    Task_js_1.default.find()
        .populate('user')
        .exec((err, tasks) => {
        res.status(200).json(tasks);
    });
};
taskController.showTaskById = (req, res) => {
    const id = req.params.id;
    Task_js_1.default.findById(id)
        .populate('user')
        .exec((err, tasks) => {
        if (err) {
            res.status(404).send({ message: `${err.message} - Task not found!` });
        }
        else {
            res.status(200).send(tasks);
        }
    });
};
taskController.addTask = (req, res) => {
    let task = new Task_js_1.default(req.body);
    task.save((err) => {
        if (err) {
            res.status(500).send({ message: `${err.message} - Something went wrong, the task has not been added!` });
        }
        else {
            res.status(201).send(task.toJSON());
        }
    });
};
taskController.updateTask = (req, res) => {
    const id = req.params.id;
    Task_js_1.default.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (!err) {
            res.status(200).send({ message: "Task updated successfully!" });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
taskController.deleteTask = (req, res) => {
    const id = req.params.id;
    Task_js_1.default.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).send({ message: "task deleted sucessfully!" });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
exports.default = taskController;
