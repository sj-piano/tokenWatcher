import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import _ from 'lodash';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  //console.log(String(_.keys(req)));
  console.log('Initial endpoint');
  res.send('Token Watcher\n');
});

app.get('/hello', (req: Request, res: Response) => {
  //console.log(String(_.keys(req)));
  res.send('Hello world\n');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});