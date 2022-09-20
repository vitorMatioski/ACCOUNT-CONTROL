import express from "express";
import AulaController from "../controllers/aulaController.js";

const router = express.Router();

router
  .get("/aulas", AulaController.showAulas)
  .get("/aulas/:id", AulaController.showAulaById)
  .post("/aulas", AulaController.addAula)
  .put("/aulas/:id", AulaController.updateAula)
  .delete("/aulas/:id", AulaController.deleteAula)

export default router;   