import { BorrowRecord } from "@prisma/client";
import prisma from "../../config";

const borrowABook = async (borrowInfo: BorrowRecord) => {
  const result = await prisma.borrowRecord.create({
    data: borrowInfo,
  });

  return result;
};

const getOverdueBooks = async () => {
  const overdueBooks = await prisma.borrowRecord.findMany({
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
    const overdueDays =
      Math.floor(
        (currentDate.getTime() - borrowDate.getTime()) / (1000 * 60 * 60 * 24)
      ) - 14;
    return {
      borrowId: book.borrowId,
      bookTitle: book.book.title,
      borrowerName: book.member.name,
      overdueDays,
    };
  });

  return overdueBooksWithDetails;
};
export const borrowService = {
  borrowABook,
  getOverdueBooks,
};
