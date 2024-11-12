import prisma from "../../config";

const returnABook = async (borrowId: string) => {
  const result = await prisma.borrowRecord.update({
    where: { borrowId },
    data: { returnDate: new Date() },
  });

  return result;
};

export const returnService = {
  returnABook,
};
