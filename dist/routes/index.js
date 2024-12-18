"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../app/modules/book/book.route");
const member_route_1 = require("../app/modules/member/member.route");
const borrow_route_1 = require("../app/modules/borrow/borrow.route");
const return_route_1 = require("../app/modules/return/return.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/books",
        route: book_route_1.BookRoutes,
    },
    {
        path: "/members",
        route: member_route_1.MemberRoutes,
    },
    {
        path: "/borrow",
        route: borrow_route_1.BorrowRoutes,
    },
    {
        path: "/return",
        route: return_route_1.ReturnRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
