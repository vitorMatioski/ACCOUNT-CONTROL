"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_js_1 = __importDefault(require("../controllers/taskController.js"));
const router = express_1.default.Router();
router
    .get("/tasks", taskController_js_1.default.showTasks)
    .get("/tasks/:id", taskController_js_1.default.showTaskById)
    .post("/tasks", taskController_js_1.default.addTask)
    .put("/tasks/:id", taskController_js_1.default.updateTask)
    .delete("/tasks/:id", taskController_js_1.default.deleteTask);
exports.default = router;
