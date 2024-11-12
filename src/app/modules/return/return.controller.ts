import { catchAsync } from "../../utils/cacheAsync";
import { sendResponse } from "../../utils/sendResponse";
import { returnService } from "./return.service";

const returnABook = catchAsync(async (req, res) => {
  const { borrowId } = req.body;
  const returnBook = await returnService.returnABook(borrowId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book returned successfully",
    // data: returnBook,
  });
});

export const returnController = {
  returnABook,
};
