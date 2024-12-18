"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberService = void 0;
const config_1 = __importDefault(require("../../config"));
const createMember = (member) => __awaiter(void 0, void 0, void 0, function* () {
    const isMemberExist = yield config_1.default.member.findFirst({
        where: {
            email: member.email,
        },
    });
    if (isMemberExist) {
        throw new Error("Member already exists");
    }
    const result = yield config_1.default.member.create({
        data: member
    });
    return result;
});
const getMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield config_1.default.member.findMany();
    return members;
});
const getMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield config_1.default.member.findUnique({
        where: {
            memberId: id,
        },
    });
    return member;
});
const updateMember = (id, memberInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield config_1.default.member.update({
        where: {
            memberId: id,
        },
        data: memberInfo,
    });
    return member;
});
const deleteMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield config_1.default.member.delete({
        where: {
            memberId: id,
        },
    });
    return member;
});
exports.memberService = {
    createMember,
    getMembers,
    getMember,
    updateMember,
    deleteMember,
};
