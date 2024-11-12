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
exports.returnController = void 0;
const cacheAsync_1 = require("../../utils/cacheAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const return_service_1 = require("./return.service");
const returnABook = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = req.body;
    const returnBook = yield return_service_1.returnService.returnABook(borrowId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Book returned successfully",
        // data: returnBook,
    });
}));
exports.returnController = {
    returnABook,
};