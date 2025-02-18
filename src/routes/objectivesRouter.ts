import express from 'express';
import { 
    getObjectives,
    createObjective,
    getObjective,
    updateObjective,
    deleteObjective
 } from '../controllers/objectivesController';

const objectivesRouter = express.Router();

objectivesRouter.route('/')
    .get(getObjectives)
    .post(createObjective);

objectivesRouter.route('/:id')
    .get(getObjective)
    .put(updateObjective)
    .delete(deleteObjective);

export default objectivesRouter;