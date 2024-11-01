import { navigation } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'
import Container from './Container'

const BottomHeader = () => {
  return (
    <div className="border-b border-b-gray-400 bg-themeColor/40 py-2">
      <Container className="flex items-center justify-between py-1">
        <div className="gap-2 text-xs md:text-sm font-medium flex items-center md:gap-5">
          {navigation.map((item)=>{
                return <Link key={item?.title} href={item?.href} className='hover:text-themeColor duration-200'>{item?.title}</Link>

          })}
          <Link href={"/signin"} className='hover:text-themeColor duration-200'>Please Signin to view your cart</Link>
        </div>
        <p className='hidden md:inline-flex text-xs text-gray-400 font-medium'>Hotline <span className='text-black'>+88 0123456789</span></p>
      </Container>
    </div>
  )
}

export default BottomHeader