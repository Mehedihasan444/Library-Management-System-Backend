import { Book } from "@prisma/client";
import prisma from "../../config";

const createBook = async (book: Book) => {
  const isBookExist = await prisma.book.findFirst({
    where: {
      title: book.title,
      publishedYear: book.publishedYear,
    },
  });
  if (isBookExist) {
    throw new Error("Book already exists");
  }
  const result = await prisma.book.create({
    data: book,
  });
  return result;
};
const getBooks = async () => {
  const books = await prisma.book.findMany();
  return books;
};

const getBook = async (id: string) => {
  const book = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });
  return book;
};
const updateBook = async (id: string, bookInfo: Partial<Book>) => {
  const book = await prisma.book.update({
    where: {
      bookId: id,
    },
    data: bookInfo,
  });
  return book;
};
const deleteBook = async (id: string) => {
  const book = await prisma.book.delete({
    where: {
      bookId: id,
    },
  });
  return book;
};

export const bookService = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
