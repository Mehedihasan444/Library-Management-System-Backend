import express from 'express';
import { borrowController } from './borrow.controller';

const router = express.Router();

router.post("/",borrowController.borrowABook)


export const BorrowRoutes = router;