import express from 'express';
import {getIndex} from '../controllers/home';
import {getSecondary} from '../controllers/secondary';

const router = express.Router();

router.get('/hennesy', getSecondary)

router.get('/', getIndex)

export default router