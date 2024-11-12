"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidation = void 0;
const zod_1 = require("zod");
const createBookValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: "Title is required",
        })
            .nonempty({ message: "Title cannot be empty" }),
        genre: zod_1.z
            .string({
            required_error: "Genre is required",
        })
            .nonempty({ message: "Genre cannot be empty" }),
        publishedYear: zod_1.z
            .number({
            required_error: "Published year is required",
        })
            .int({ message: "Published year must be an integer" })
            .positive({ message: "Published year must be a positive number" }),
        totalCopies: zod_1.z
            .number({
            required_error: "Total copies are required",
        })
            .int({ message: "Total copies must be an integer" })
            .positive({ message: "Total copies must be a positive number" }),
        availableCopies: zod_1.z
            .number({
            required_error: "Available copies are required",
        })
            .int({ message: "Available copies must be an integer" })
            .positive({ message: "Available copies must be a positive number" }),
    }),
});
const updateBookValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: "Title is required",
        })
            .nonempty({ message: "Title cannot be empty" })
            .optional(),
        genre: zod_1.z
            .string({
            required_error: "Genre is required",
        })
            .nonempty({ message: "Genre cannot be empty" })
            .optional(),
        publishedYear: zod_1.z
            .number({
            required_error: "Published year is required",
        })
            .int({ message: "Published year must be an integer" })
            .positive({ message: "Published year must be a positive number" })
            .optional(),
        totalCopies: zod_1.z
            .number({
            required_error: "Total copies are required",
        })
            .int({ message: "Total copies must be an integer" })
            .positive({ message: "Total copies must be a positive number" })
            .optional(),
        availableCopies: zod_1.z
            .number({
            required_error: "Available copies are required",
        })
            .int({ message: "Available copies must be an integer" })
            .positive({ message: "Available copies must be a positive number" })
            .optional(),
    }),
});
exports.bookValidation = { createBookValidation, updateBookValidation };
