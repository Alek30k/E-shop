import prisma from "@/libs/prismadb";

export interface IProducParams {
  category?: string | null;
  searchTerm?: string | null;
}

export default async function getProducts(params: IProducParams) {
  try {
    const { category, searchTerm } = params;
    let searchString = searchTerm;

    if (!searchTerm) {
      searchString = "";
    }

    let query: any = {};

    if (category) {
      query.category = category;
    }

    const products = await prisma.product.findMany({
      where: {
        ...query,
        OR: [
          {
            name: {
              contain: searchString,
              mode: "insensitive",
            },
            description: {
              contain: searchString,
              mode: "insensitive",
            },
          },
        ],
      },
      include: {
        reviews: {
          include: {
            user: true,
          },
        },
      },
    });
  } catch (error: any) {
    throw new Error(error);
  }
}
