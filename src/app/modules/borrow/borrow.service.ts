import { BorrowRecord } from "@prisma/client";
import prisma from "../../config";

const borrowABook = async (borrowInfo: BorrowRecord) => {
  const result = await prisma.borrowRecord.create({
    data: borrowInfo,
  });

  return result;
};

export const borrowService = {
  borrowABook,
};
