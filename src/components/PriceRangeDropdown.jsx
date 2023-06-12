import React,{useState,useEffect} from 'react';

// iportinh icons 
import {RiWallet3Line,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';

import {Menu} from '@headlessui/react';

// importing house consext
import { HouseContext } from './HouseContext';
import { useContext } from 'react';

const PriceRangeDropdown = () => {
  const { price,setPrice} = useContext(HouseContext);
  // console.log(countries);
  const [isOpen , setIsOpen] =useState(false);

  //
  const prices= [
    {
      value: 'Price range (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '220000 - 300000',
    },
    {
      value: '300000 - 400000',
    },
  ]
  
  return <Menu as='div' className='dropdown relative'>

    {/*  */}

    <Menu.Button onClick={()=> setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary'/>
      <div>
        {/* joh country dikhegi wohh ye */}
        <div className='text-[15px] font-medium leading-tight'>{price} </div> 
        <div className='text-[13px]'>Choose Price Range</div>
      </div>
      {/* fix this bug */}
        {isOpen ?
          (<RiArrowUpSLine 
          className='dropdown-icon-secondary'/>)
          : (<RiArrowDownSLine 
          className='dropdown-icon-secondary'/>)}
    </Menu.Button>
    {/*  */}

    <Menu.Items className='dropdown-menu'>
      {/* ye h dropdown se country set krne k liye x */}
      {prices.map((price,index)=>{
        return (
          <Menu.Item onClick={()=>setPrice(price.value)}
          className=' cursor-pointer  hover:text-violet-700 transition  '
          as='li' key={index}>
            {price.value}
          </Menu.Item>
        )
      })}
    </Menu.Items>

  </Menu>;
};

export default PriceRangeDropdown;
