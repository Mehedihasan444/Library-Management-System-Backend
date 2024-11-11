import express from "express";
import { BookRoutes } from "../app/modules/book/book.route";
import { MemberRoutes } from "../app/modules/member/memeber.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
