import Link from 'next/link';
import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import { useSession } from 'next-auth/react';
import { useMyCartItemsQuery } from '../redux/productSlice';

const HeaderIcons = () => {
  const { data: session } = useSession(); 
  const { data,isLoading, refetch } = useMyCartItemsQuery(session?.user?.email);
  const sum=data?.reduce((acc,cur)=>acc+cur?.quantity,0)
  return (
    <div className='flex items-center gap-x-4'>
        <Link href={"/favorite"} className="relative inline-flex items-center">
      <MdFavoriteBorder className="text-2xl" />
      <span className="absolute top-1 right-0 transform translate-x-1/2 -translate-y-1/2 text-[13px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
        0
      </span>
    </Link>
    <Link href={"/cart"} className="relative inline-flex items-center">
      <BiShoppingBag className="text-2xl" />
      <span className="absolute top-1 right-0 transform translate-x-1/2 -translate-y-1/2 text-[13px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
        {sum ? sum :0}
      </span>
    </Link>
    </div>
  );
};

export default HeaderIcons;
