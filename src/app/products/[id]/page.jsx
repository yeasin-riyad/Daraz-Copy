import ProductItem from "@/components/ProductItem";

const ProductPage = async({ params }) => {


  const id = (await params).id
  return <ProductItem id={id} />;
};

export default ProductPage;





