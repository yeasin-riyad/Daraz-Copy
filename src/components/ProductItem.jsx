"use client";

import Container from "@/components/header/Container";
import Loader from "@/components/Loader";
import Description from "@/components/products/Description";
import ImageSection from "@/components/products/ImageSection";
import Reviews from "@/components/products/Reviews";
import { useGetProductQuery } from "@/components/redux/productSlice";

const ProductItem = ({ id }) => {
    
  const { data: productItem, error, isLoading } = useGetProductQuery(id);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <div className="grid grid-cols-1 gap-5 my-3 md:grid-cols-2 gap-x-9">
        <ImageSection images={productItem?.product.images} />
        <Description product={productItem?.product} />
        <Reviews reviews={productItem?.product.reviews} />
      </div>
    </Container>
  );
};

export default ProductItem;
