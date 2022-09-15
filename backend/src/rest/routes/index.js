import express from 'express';
const router = express.Router();
import memoryRouter from './memoryRouter';

router.use('/memory', memoryRouter);

export default router;