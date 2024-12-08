'use client'
import React from 'react';
import Image from 'next/image';
import '@fontsource/poppins';

interface ICardProps {
    image: string;
    title: string;
    price: string;
}

const Card = (props: ICardProps) => {
    const { image, title, price } = props;
    return (
        <div className='mx-2'>
            <div className='group bg-transparent w-full md:w-[287px] h-[397px] flex flex-col justify-between cursor-pointer relative'>
                <div className='flex flex-col items-center pb-4 h-[287px]'>
                    <Image src={image} alt="item image" width={187} height={287} className='w-full h-full' />
                </div>
                <div className='flex flex-col pl-4 pb-4'>
                    <h1 style={{ fontFamily: 'Poppins' }} className='text-base font-normal'>{title}</h1>
                    <h3 style={{ fontFamily: 'Poppins' }} className='font-medium text-2xl leading-9'>{price}</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Card;