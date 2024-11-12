import { z } from "zod";

const returnABookValidation = z.object({
    body: z.object({
        borrowId: z.string({
            required_error: "Borrow id is required"
        }).nonempty({ message: "Borrow id cannot be empty" }),
    })
})

export const returnValidation = {
    returnABookValidation
}