import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import ProductList from "@/components/ProductList";
import Slider from "@/components/slider/Slider";

export default async function Home() {
 
  
  return (
    <main>
      <div>
        <Header></Header>
        <Slider></Slider>
        <ProductList/>
        <Footer/>
       
      </div>
    </main>
  );
}
