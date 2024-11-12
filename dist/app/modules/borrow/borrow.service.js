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
exports.borrowService = void 0;
const config_1 = __importDefault(require("../../config"));
const borrowABook = (borrowInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.default.borrowRecord.create({
        data: borrowInfo,
    });
    return result;
});
const getOverdueBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const overdueBooks = yield config_1.default.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: new Date(new Date().setDate(new Date().getDate() - 14)),
            },
        },
        include: {
            book: true,
            member: true,
        },
    });
    const currentDate = new Date();
    const overdueBooksWithDetails = overdueBooks.map((book) => {
        const borrowDate = new Date(book.borrowDate);
        const overdueDays = Math.floor((currentDate.getTime() - borrowDate.getTime()) / (1000 * 60 * 60 * 24)) - 14;
        return {
            borrowId: book.borrowId,
            bookTitle: book.book.title,
            borrowerName: book.member.name,
            overdueDays,
        };
    });
    return overdueBooksWithDetails;
});
exports.borrowService = {
    borrowABook,
    getOverdueBooks,
};
