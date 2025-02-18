import express from 'express';

const keyResultsRouter = express.Router();

keyResultsRouter.get('/', (req: express.Request, res: express.Response) => {
    res.send('Key result Router');
});

export default keyResultsRouter;