import { z } from "zod"

const borrowBookValidation=z.object({
    body:z.object({
        bookId:z.string({
            required_error:"Book id is required"
        }).nonempty({message:"Book id cannot be empty"}),
        memberId:z.string({
            required_error:"Member id is required"
        }).nonempty({message:"Member id cannot be empty"}),
       
    })
})

export const borrowValidation = {
borrowBookValidation
}