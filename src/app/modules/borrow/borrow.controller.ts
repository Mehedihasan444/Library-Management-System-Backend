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

export const borrowController={
    borrowABook
}