import prisma from "@/db/prisma";

export const getData = async () => {
   const data = await prisma?.service.findMany();
   return data;
};
