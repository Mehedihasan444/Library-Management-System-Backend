import express from "express";
import { bookController } from "./book.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bookValidation } from "./book.validation";
const router = express.Router();

router.post(
  "/",
  validateRequest(bookValidation.createBookValidation),
  bookController.createBook
);
router.get("/", bookController.getBooks);
router.get("/:bookId", bookController.getBook);
router.put(
  "/:bookId",
  validateRequest(bookValidation.updateBookValidation),
  bookController.updateBook
);
router.delete("/:bookId", bookController.deleteBook);

export const BookRoutes = router;
