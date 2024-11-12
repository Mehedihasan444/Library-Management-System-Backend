"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const cacheAsync_1 = require("../../utils/cacheAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const book_service_1 = require("./book.service");
const createBook = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_service_1.bookService.createBook(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 201,
        message: "Book created successfully",
        data: book,
    });
}));
const getBooks = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_service_1.bookService.getBooks();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Books retrieved successfully",
        data: books,
    });
}));
const getBook = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const books = yield book_service_1.bookService.getBook(bookId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Book retrieved successfully",
        data: books,
    });
}));
const updateBook = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const bookInfo = req.body;
    const books = yield book_service_1.bookService.updateBook(bookId, bookInfo);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Book updated successfully",
        data: books,
    });
}));
const deleteBook = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const books = yield book_service_1.bookService.deleteBook(bookId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Book successfully deleted",
    });
}));
exports.bookController = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
};
