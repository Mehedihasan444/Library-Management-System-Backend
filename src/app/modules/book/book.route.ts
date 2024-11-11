import express from "express";
import { bookController } from "./book.controller";
const router = express.Router();

router.post("/", bookController.createBook);
router.get("/", bookController.getBooks);
router.get("/:bookId", bookController.getBook);
router.put("/:bookId", bookController.updateBook);
router.delete("/:bookId", bookController.deleteBook);

export const BookRoutes = router;
