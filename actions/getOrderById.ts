import prisma from "@/libs/prismadb";

interface IParams {
  orderId?: string;
}

export default async function getOrderByd(params: IParams) {
  try {
    const { orderId } = params;

    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });
  } catch (error: any) {
    throw new Error(error);
  }
}
