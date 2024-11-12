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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const config_1 = __importDefault(require("../../config"));
const createBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const isBookExist = yield config_1.default.book.findFirst({
        where: {
            title: book.title,
            publishedYear: book.publishedYear,
        },
    });
    if (isBookExist) {
        throw new Error("Book already exists");
    }
    const result = yield config_1.default.book.create({
        data: book,
    });
    return result;
});
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield config_1.default.book.findMany();
    return books;
});
const getBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield config_1.default.book.findUnique({
        where: {
            bookId: id,
        },
    });
    return book;
});
const updateBook = (id, bookInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield config_1.default.book.update({
        where: {
            bookId: id,
        },
        data: bookInfo,
    });
    return book;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield config_1.default.book.delete({
        where: {
            bookId: id,
        },
    });
    return book;
});
exports.bookService = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
};
