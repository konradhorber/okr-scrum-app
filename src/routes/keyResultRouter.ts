import express from 'express';

const keyResultRouter = express.Router();

keyResultRouter.get('/', (req: express.Request, res: express.Response) => {
    res.send('Key result Router');
});

module.exports = keyResultRouter;