import express from 'express';
import { getObjectives } from '../controllers/objectives';

const objectiveRouter = express.Router();

objectiveRouter.get('/', (req: express.Request, res: express.Response) => {
    getObjectives(req, res);
});

module.exports = objectiveRouter;