"use client";
import { useGetProductsQuery } from "./redux/productSlice";
import Loader from "./Loader";
import SingleProduct from "./SingleProduct";
import Container from "./header/Container";

const ProductList = () => {
  const { data,  isLoading } = useGetProductsQuery()


 
 

  {if(isLoading){
    return <Loader/>
  }}

  return (
   
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-3">
        {data?.products?.map((product) => (
          <SingleProduct key={product?.id} product={product}/>
         
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
