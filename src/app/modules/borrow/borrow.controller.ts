import { get } from "http";
import { catchAsync } from "../../utils/cacheAsync";
import { sendResponse } from "../../utils/sendResponse";
import { borrowService } from "./borrow.service";

const borrowABook=catchAsync(async(req,res)=>{
const borrowBook=await borrowService.borrowABook(req.body);
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Book borrowed successfully",
        data:borrowBook
    })
})

const getOverdueBooks=catchAsync(async(req,res)=>{
    const overdueBooks=await borrowService.getOverdueBooks();
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:overdueBooks.length>0?"Overdue borrow list fetched":"No overdue books",
        data:overdueBooks
    })
})

export const borrowController={
    borrowABook,
    getOverdueBooks
}