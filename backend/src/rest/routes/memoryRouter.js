import express from "express";
import { memoryController } from "../controllers";

const memoryRouter = express.Router();

memoryRouter.get('/recall', memoryController.get)
memoryRouter.post('/save', memoryController.post)

export default memoryRouter;