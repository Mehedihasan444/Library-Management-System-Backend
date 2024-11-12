import express from "express";
import { returnController } from "./return.controller";
import validateRequest from "../../middlewares/validateRequest";
import { returnValidation } from "./return.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(returnValidation.returnABookValidation),
  returnController.returnABook
);

export const ReturnRoutes = router;
