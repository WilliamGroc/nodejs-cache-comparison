import express, { NextFunction, Request, Response } from 'express';
import NodeCache from 'node-cache';
import routers from './api'

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 3000;

app.use(routers)

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express
         http://localhost:${port}/`);
});