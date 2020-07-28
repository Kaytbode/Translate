import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.status(200).send('Welcome home'));

export default routes;
