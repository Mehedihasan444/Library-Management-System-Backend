import express from 'express';
import { borrowController } from './borrow.controller';
import { borrowValidation } from './borrow.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post("/",validateRequest(borrowValidation.borrowBookValidation), borrowController.borrowABook)


export const BorrowRoutes = router;