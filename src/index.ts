import express, { Request, Response } from 'express';

import objectivesRouter from './routes/objectivesRouter';
import keyResultsRouter from './routes/keyResultsRouter';
import productBacklogItemsRouter from './routes/productBacklogItemsRouter';
import sprintBacklogItemsRouter from './routes/sprintBacklogItemsRouter';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.use('/objectives', objectivesRouter);
app.use('/key-results', keyResultsRouter);
app.use('/product-backlog-items', productBacklogItemsRouter);
app.use('/sprint-backlog-items', sprintBacklogItemsRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});