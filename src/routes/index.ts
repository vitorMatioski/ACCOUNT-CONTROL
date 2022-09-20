import express from "express";
import { Express } from "express-serve-static-core";
import aulas from "./aulaRoutes.js";


const routes = (app: Express) => {
  app.route("/").get((req, res) => {
      res.status(200).send({name: "Matheus controle contas"});
  });

  app.use(express.json(), aulas);
};

export default routes;