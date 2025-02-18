import express from 'express';

const productBacklogItemsRouter = express.Router();

productBacklogItemsRouter.get('/', (req: express.Request, res: express.Response) => {
    res.send('PBI Router');
});

export default productBacklogItemsRouter;