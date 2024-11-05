import Container from "@/components/header/Container";
import { fetchData } from "@/components/helpers";
import Description from "@/components/products/Description";
import ImageSection from "@/components/products/ImageSection";
import Reviews from "@/components/products/Reviews";

const ProductItem = async ({ params }) => {
  const id = (await params).id;
  const productItem = await fetchData(`https://dummyjson.com/products/${id}`);

  return (
   
       <Container>
       <div className="grid grid-cols-1 gap-5 my-3 md:grid-cols-2 gap-x-9">
        <ImageSection images={productItem?.images} />
        <Description product={productItem} />
        <Reviews reviews={productItem?.reviews} />
      </div>
       </Container>
  
  );
};

export default ProductItem;
