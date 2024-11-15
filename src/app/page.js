export const dynamic="force-dynamic";
import ProductList from "@/components/ProductList";
import Slider from "@/components/slider/Slider";
export default async function Home() {
 
  
  return (
    <main>
      <div>
        <Slider></Slider>
        <ProductList/>

       
      </div>
    </main>
  );
}
