import { Router } from "express";
import plantController from "../controllers/plant.controller";


export const routes = Router();

routes.get("/get_plant/:page", (req, res, next) => {
    return plantController.index(req, res, next);
});