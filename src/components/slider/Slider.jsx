"use client"
import { Navigation, Pagination,  A11y, Autoplay } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { slider } from '@/assets/assets';
import Link from 'next/link';
import Image from 'next/image';
const Slider = () => {
    return (
        <Swiper className=' rounded-sm w-full mx-2 '
          // install Swiper modules
          modules={[Navigation, Pagination,Autoplay,  A11y]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
        >
         
          {slider.map(slide=>(
            <SwiperSlide key={slide.id}>
                <Link href={"/"}><Image className='h-[200px] md:h-[500px]' src={slide.slider} alt=''/></Link>

            </SwiperSlide>
          ))}
      
        </Swiper>
      );
}

export default Slider