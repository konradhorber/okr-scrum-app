import express from 'express';

const sprintBacklogItemsRouter = express.Router();

sprintBacklogItemsRouter.get('/', (req: express.Request, res: express.Response) => {
    res.send('Sprint backlog Router');
});

export default sprintBacklogItemsRouter;