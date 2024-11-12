import express from "express";
import { BookRoutes } from "../app/modules/book/book.route";
import { MemberRoutes } from "../app/modules/member/member.route";
import { BorrowRoutes } from "../app/modules/borrow/borrow.route";
import { ReturnRoutes } from "../app/modules/return/return.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/members",
    route: MemberRoutes,
  },
  {
    path: "/borrow",
    route: BorrowRoutes,
  },
  {
    path: "/return",
    route: ReturnRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
