import React, { useContext } from 'react';

// importing components 
import CountryDropdown from '../components/CountryDropdown'
import PriceRangeDropdown from '../components/PriceRangeDropdown'
import PropertyDropdown from '../components/PropertyDropdown'

// importing icons 
import {RiSearch2Line} from 'react-icons/ri'
import { HouseContext } from './HouseContext';


const Search = () => {
  const {houses,handleClick} = useContext(HouseContext);
  
  // console.log(houses);

  return <div className='px-[30px] max-w-[1170px] py-6 mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-x-3 relative md:-top-4 md:shadow-1 bg-white md:bg-transparent backdrop-blur rounded-lg '>
    <CountryDropdown/>
    <PropertyDropdown/>
    <PriceRangeDropdown/>

    <button onClick={handleClick} className=' bg-violet-700 hover:bg-violet-800x transition w-full md:max-w-[162px] h-16 flex justify-center items-center text-white rounded-lg text-xl ' > <RiSearch2Line/> </button>
  </div>;
};

export default Search;
