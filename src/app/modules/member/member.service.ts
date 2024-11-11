import { Member } from "@prisma/client";
import prisma from "../../config";

const createMember = async (member: Member) => {
    const result = await prisma.member.create({
        data: member
    });
    return member;
}
const getMembers = async () => {
    const members = await prisma.member.findMany();
    return members;
  };
  
  const getMember = async (id: string) => {
    const member = await prisma.member.findUnique({
      where: {
        memberId: id,
      },
    });
    return member;
  };
  const updateMember = async (id: string, memberInfo: Partial<Member>) => {
    const member = await prisma.member.update({
      where: {
        memberId: id,
      },
      data: memberInfo,
    });
    return member;
  };
  const deleteMember = async (id: string) => {
    const member = await prisma.member.delete({
      where: {
        memberId: id,
      },
    });
    return member;
  };
export const memberService = {
    createMember,
    getMembers,
    getMember,
    updateMember,
    deleteMember,
}