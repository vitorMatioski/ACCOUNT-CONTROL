"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aulaRoutes_js_1 = __importDefault(require("./aulaRoutes.js"));
const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ name: "Matheus controle contas" });
    });
    app.use(express_1.default.json(), aulaRoutes_js_1.default);
};
exports.default = routes;
