import { z } from "zod"


const createMemberValidation =  z.object({
    body: z.object({
        name: z
        .string({
            required_error: "Name is required"
        })
        .nonempty({ message: "Name cannot be empty" }),
        email: z
        .string({
            required_error: "Email is required"
        })
        .email({ message: "Email must be a valid email address" }),
        phone: z
        .string({
            required_error: "Phone is required"
        })
        .nonempty({ message: "Phone cannot be empty" }),
        membershipDate: z
        .string({
            required_error: "Membership date is required"
        })
        .nonempty({ message: "Membership date cannot be empty" }),
       
})
})
const updateMemberValidation = z.object({
    body: z.object({
        name: z
        .string({
            required_error: "Name is required"
        })
        .nonempty({ message: "Name cannot be empty" })
        .optional(),
        email: z
        .string({
            required_error: "Email is required"
        })
        .email({ message: "Email must be a valid email address" })
        .optional(),
        phone: z
        .string({
            required_error: "Phone is required"
        })
        .nonempty({ message: "Phone cannot be empty" })
        .optional(),
        membershipDate: z
        .string({
            required_error: "Membership date is required"
        })
        .nonempty({ message: "Membership date cannot be empty" })
        .optional(),
    })
})

export const memberValidation = {
  createMemberValidation,
  updateMemberValidation
}