"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRoutes = void 0;
const express_1 = __importDefault(require("express"));
const return_controller_1 = require("./return.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const return_validation_1 = require("./return.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(return_validation_1.returnValidation.returnABookValidation), return_controller_1.returnController.returnABook);
exports.ReturnRoutes = router;
