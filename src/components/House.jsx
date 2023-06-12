import React from 'react';

// import incons 
import {BiBed,BiBath,BiArea} from 'react-icons/bi'
const House = ({house}) => {

  const {image,type,country,address,bedrooms,bathrooms,surface,price} =house;

  return <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full mx-auto cursor-pointer max-w-[350px] hover:shadow-2xl transition'>
    <img className='mb-8' 
     src={image} alt="" />
     <div className='mb-4 flex gap-x-2 text-sm ' >
      <div className='bg-green-500 px-3 text-white rounded-full'>{type}</div>
      <div className=' bg-violet-500 px-3 rounded-full text-white' >{country}</div>
     </div>

     <div className='text-lg font-semibold max-w-[260px] ' >{address}</div>
     {/*  */}
     <div className='flex gap-x-4 my-4'>
      <div className='flex items-center text-gray-600 gap-1'>
        <div ><BiBed size={20}/></div>
        <div>{bedrooms}</div>
      </div>
{/*  */}
      <div className='flex items-center text-gray-600 gap-1'>
        <div ><BiBath size={20}/></div>
        <div>{bathrooms}</div>
      </div>
      {/*  */}
      <div className='flex items-center text-gray-600 gap-1'>
        <div ><BiArea size={20}/></div>
        <div>{surface}</div>
      </div>

     </div>
     <div className='text-lg font-semibold text-violet-600 mb-4'>{`Rs-${price} `}</div>
  </div>;
};

export default House;
