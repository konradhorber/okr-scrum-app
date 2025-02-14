import express from 'express';

const objectiveRouter = express.Router();

objectiveRouter.get('/', (req: express.Request, res: express.Response) => {
    res.send('Objective Router');
});

module.exports = objectiveRouter;