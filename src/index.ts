import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

const objectiveRouter = require('./routes/objectiveRouter');
const keyResultRouter = require('./routes/keyResultRouter');
const productBacklogItemRouter = require('./routes/productBacklogItemRouter');
const sprintBacklogItemRouter = require('./routes/sprintBacklogItemRouter');

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.use('/objectives', objectiveRouter);
app.use('/key-results', keyResultRouter);
app.use('/product-backlog-items', productBacklogItemRouter);
app.use('/sprint-backlog-items', sprintBacklogItemRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});