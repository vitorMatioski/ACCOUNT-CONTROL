"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aulaController_js_1 = __importDefault(require("../controllers/aulaController.js"));
const router = express_1.default.Router();
router
    .get("/aulas", aulaController_js_1.default.showAulas)
    .get("/aulas/:id", aulaController_js_1.default.showAulaById)
    .post("/aulas", aulaController_js_1.default.addAula)
    .put("/aulas/:id", aulaController_js_1.default.updateAula)
    .delete("/aulas/:id", aulaController_js_1.default.deleteAula);
exports.default = router;
