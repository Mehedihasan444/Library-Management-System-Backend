import { z } from "zod";

const createBookValidation = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Title is required",
      })
      .nonempty({ message: "Title cannot be empty" }),
    genre: z
      .string({
        required_error: "Genre is required",
      })
      .nonempty({ message: "Genre cannot be empty" }),
    publishedYear: z
      .number({
        required_error: "Published year is required",
      })
      .int({ message: "Published year must be an integer" })
      .positive({ message: "Published year must be a positive number" }),
    totalCopies: z
      .number({
        required_error: "Total copies are required",
      })
      .int({ message: "Total copies must be an integer" })
      .positive({ message: "Total copies must be a positive number" }),
    availableCopies: z
      .number({
        required_error: "Available copies are required",
      })
      .int({ message: "Available copies must be an integer" })
      .positive({ message: "Available copies must be a positive number" }),
  }),
});

const updateBookValidation = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Title is required",
      })
      .nonempty({ message: "Title cannot be empty" })
      .optional(),
    genre: z
      .string({
        required_error: "Genre is required",
      })
      .nonempty({ message: "Genre cannot be empty" })
      .optional(),
    publishedYear: z
      .number({
        required_error: "Published year is required",
      })
      .int({ message: "Published year must be an integer" })
      .positive({ message: "Published year must be a positive number" })
      .optional(),
    totalCopies: z
      .number({
        required_error: "Total copies are required",
      })
      .int({ message: "Total copies must be an integer" })
      .positive({ message: "Total copies must be a positive number" })
      .optional(),
    availableCopies: z
      .number({
        required_error: "Available copies are required",
      })
      .int({ message: "Available copies must be an integer" })
      .positive({ message: "Available copies must be a positive number" })
      .optional(),
  }),
});

export const bookValidation = { createBookValidation, updateBookValidation };
