"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_js_1 = __importDefault(require("../controllers/userController.js"));
const router = express_1.default.Router();
router
    .get("/users", userController_js_1.default.showUsers)
    .get("/users/:id", userController_js_1.default.showUserById)
    .post("/users", userController_js_1.default.addUser)
    .put("/users/:id", userController_js_1.default.updateUser)
    .delete("/users/:id", userController_js_1.default.deleteUser);
exports.default = router;
