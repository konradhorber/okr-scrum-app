import express from 'express';

const productBacklogItemRouter = express.Router();

productBacklogItemRouter.get('/', (req: express.Request, res: express.Response) => {
    res.send('PBI Router');
});

module.exports = productBacklogItemRouter;