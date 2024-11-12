"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnValidation = void 0;
const zod_1 = require("zod");
const returnABookValidation = zod_1.z.object({
    body: zod_1.z.object({
        borrowId: zod_1.z.string({
            required_error: "Borrow id is required"
        }).nonempty({ message: "Borrow id cannot be empty" }),
    })
});
exports.returnValidation = {
    returnABookValidation
};
