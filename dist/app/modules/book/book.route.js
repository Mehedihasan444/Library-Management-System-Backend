"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(book_validation_1.bookValidation.createBookValidation), book_controller_1.bookController.createBook);
router.get("/", book_controller_1.bookController.getBooks);
router.get("/:bookId", book_controller_1.bookController.getBook);
router.put("/:bookId", (0, validateRequest_1.default)(book_validation_1.bookValidation.updateBookValidation), book_controller_1.bookController.updateBook);
router.delete("/:bookId", book_controller_1.bookController.deleteBook);
exports.BookRoutes = router;
