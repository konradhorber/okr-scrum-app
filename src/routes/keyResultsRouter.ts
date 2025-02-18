import express from 'express';
import { getObjectives } from '../controllers/objectivesController';

const keyResultsRouter = express.Router();

keyResultsRouter.route('/')
    .get(getObjectives);

export default keyResultsRouter;