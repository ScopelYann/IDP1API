import { type NextFunction, type Request, type Response } from "express";
import { PlantService } from "../services/plant.service";
import { StatusCode } from "status-code-enum";

class PlantController {
    async index(_req: Request, res: Response, _next: NextFunction) {
        const service = new PlantService();
        const page = Number(_req.params.page)

        try {
            const plants = await service.get(page);

            return res.status(StatusCode.SuccessOK).json(plants);
        } catch (error) {
            console.error("CONTROLLER ERROR:", error);

            return res.status(StatusCode.ServerErrorInternal).json({
                message: "Error while trying to get plants",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }
}

export default new PlantController();