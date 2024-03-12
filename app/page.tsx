export const revalidate = 0;

import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import ProductCard from "./components/products/ProductCard";
import getProducts, { IProducParams } from "@/actions/getProducts";
import NullData from "./components/NullData";
import { Suspense } from "react";
// import { Suspense } from "react";

interface HomeProps {
  searchParams: IProducParams;
}

// import { cookies } from "next/headers";

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return (
      <Suspense fallback={<div>Cargando...</div>}>
        <NullData title="Oops! No products found. Click 'All' to clear filters" />
      </Suspense>
    );
  }

  //Fisher-Yates shuffle algorithm

  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const shuffledProducts = shuffleArray(products);

  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        {/* <Suspense fallback={<div>Cargando...</div>}> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {shuffledProducts.map((product: any) => {
            return <ProductCard data={product} key={product.id} />;
          })}
        </div>
        {/* </Suspense> */}
      </Container>
    </div>
  );
}
