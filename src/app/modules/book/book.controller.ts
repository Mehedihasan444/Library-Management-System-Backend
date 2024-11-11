import { catchAsync } from "../../utils/cacheAsync";
import { sendResponse } from "../../utils/sendResponse";
import { bookService } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const book = await bookService.createBook(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Book created successfully",
    data: book,
  });
});

const getBooks = catchAsync(async (req, res) => {
  const books = await bookService.getBooks();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Books retrieved successfully",
    data: books,
  });
});
const getBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const books = await bookService.getBook(bookId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book retrieved successfully",
    data: books,
  });
});
const updateBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const bookInfo = req.body;
  const books = await bookService.updateBook(bookId, bookInfo);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book updated successfully",
    data: books,
  });
});
const deleteBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const books = await bookService.deleteBook(bookId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book successfully deleted",
  });
});

export const bookController = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
