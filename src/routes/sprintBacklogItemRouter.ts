import express from 'express';

const sprintBacklogItemRouter = express.Router();

sprintBacklogItemRouter.get('/', (req: express.Request, res: express.Response) => {
    res.send('Sprint backlog Router');
});

module.exports = sprintBacklogItemRouter;