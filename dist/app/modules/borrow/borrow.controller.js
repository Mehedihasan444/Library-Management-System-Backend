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
exports.borrowController = void 0;
const cacheAsync_1 = require("../../utils/cacheAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const borrow_service_1 = require("./borrow.service");
const borrowABook = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const borrowBook = yield borrow_service_1.borrowService.borrowABook(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Book borrowed successfully",
        data: borrowBook
    });
}));
const getOverdueBooks = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const overdueBooks = yield borrow_service_1.borrowService.getOverdueBooks();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: overdueBooks.length > 0 ? "Overdue borrow list fetched" : "No overdue books",
        data: overdueBooks
    });
}));
exports.borrowController = {
    borrowABook,
    getOverdueBooks
};
