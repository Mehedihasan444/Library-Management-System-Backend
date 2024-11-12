"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberValidation = void 0;
const zod_1 = require("zod");
const createMemberValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: "Name is required"
        })
            .nonempty({ message: "Name cannot be empty" }),
        email: zod_1.z
            .string({
            required_error: "Email is required"
        })
            .email({ message: "Email must be a valid email address" }),
        phone: zod_1.z
            .string({
            required_error: "Phone is required"
        })
            .nonempty({ message: "Phone cannot be empty" }),
        membershipDate: zod_1.z
            .string({
            required_error: "Membership date is required"
        })
            .nonempty({ message: "Membership date cannot be empty" }),
    })
});
const updateMemberValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: "Name is required"
        })
            .nonempty({ message: "Name cannot be empty" })
            .optional(),
        email: zod_1.z
            .string({
            required_error: "Email is required"
        })
            .email({ message: "Email must be a valid email address" })
            .optional(),
        phone: zod_1.z
            .string({
            required_error: "Phone is required"
        })
            .nonempty({ message: "Phone cannot be empty" })
            .optional(),
        membershipDate: zod_1.z
            .string({
            required_error: "Membership date is required"
        })
            .nonempty({ message: "Membership date cannot be empty" })
            .optional(),
    })
});
exports.memberValidation = {
    createMemberValidation,
    updateMemberValidation
};
