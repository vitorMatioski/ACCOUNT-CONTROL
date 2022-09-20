"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbConnect_js_1 = __importDefault(require("./config/dbConnect.js"));
const index_js_1 = __importDefault(require("./routes/index.js"));
dbConnect_js_1.default.on("error", console.log.bind(console, "There was a problem connecting to the database!"));
dbConnect_js_1.default.once("open", () => {
    console.log("Database connection successful!");
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, index_js_1.default)(app);
exports.default = app;
