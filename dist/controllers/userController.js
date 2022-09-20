"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_js_1 = __importDefault(require("../models/User.js"));
class UserController {
}
UserController.showUsers = (req, res) => {
    User_js_1.default.find((err, users) => {
        res.status(200).json(users);
    });
};
UserController.showUserById = (req, res) => {
    const id = req.params.id;
    User_js_1.default.findById(id, (err, users) => {
        if (err) {
            res.status(404).send({ message: `${err.message} - User not found!` });
        }
        else {
            res.status(200).send(users);
        }
    });
};
UserController.addUser = (req, res) => {
    let user = new User_js_1.default(req.body);
    user.save((err) => {
        if (err) {
            res.status(500).send({ message: `${err.message} - Something went wrong, the user has not been added!` });
        }
        else {
            res.status(201).send(user.toJSON());
        }
    });
};
UserController.updateUser = (req, res) => {
    const id = req.params.id;
    User_js_1.default.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (!err) {
            res.status(200).send({ message: "User updated successfully!" });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
UserController.deleteUser = (req, res) => {
    const id = req.params.id;
    User_js_1.default.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).send({ message: "User deleted sucessfully!" });
        }
        else {
            res.status(500).send({ message: err.message });
        }
    });
};
exports.default = UserController;
