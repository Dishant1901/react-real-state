import React, { useEffect, useState, createContext } from "react";

// impoert data

import { housesData } from "../data/Data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Pro=ice range (any)");

  const [loading, setLoading] = useState(false);

  // returning all countries

  useEffect(() => {
    const allCountries = houses.map((houses) => {
      return houses.country;
    });

    const uniqueCountires = ["Location(any)", ...new Set(allCountries)];
    //
    setCountries(uniqueCountires);
  }, []);

  // retuirn all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ["Location(any)", ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // set loading 
    setLoading(true);

    // console.log(country,property,price)
    // functio to chekc if dstring incudes any

    const IsDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // get first value of price  ad parse it number
    const minPrice = parseInt(price.split(" ")[0]);

    // get second value of price  ad parse it number
    const maxPrice = parseInt(price.split(" ")[2]);

    // console.log(maxPrice,minPrice)
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // if all values are slected

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all defalut
      if (IsDefault(country) && IsDefault(price) && IsDefault(property)) {
        return house;
      }

      // if coutry isn't default bit rest filters are
      if (!IsDefault(country) && IsDefault(price) && IsDefault(property)) {
        return house.country === country;
      }

      // if Property isn't default bit rest filters are
      if (IsDefault(country) && IsDefault(price) && !IsDefault(property)) {
        return house.type === property;
      }

      // if price isn't default bit rest filters are
      if (IsDefault(country) && !IsDefault(price) && IsDefault(property)) {
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house
        }
      }


      // if coutry & property are not default bit rest filters are
      if (!IsDefault(country) && IsDefault(price) && !IsDefault(property)) {
        return house.country === country && house.type===property;
      }

       // if coutry & price are not default bit rest filters are
       if (!IsDefault(country) && !IsDefault(price) && IsDefault(property)) {
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.country === country;
        }
      }

      // if price & property are not default bit rest filters are
      if (IsDefault(country) && !IsDefault(price) && !IsDefault(property)) {
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.type=== property;
        }
      }
    });
    // return newHouses
    console.log(newHouses);

    setTimeout(()=>{
    // if newHouses is null then empty +
      return newHouses.length < 1 ? setHouses ([]) : 
      setHouses(newHouses), setLoading(false)
      
    },1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        price,
        setPrice,
        houses,
        loading,
        properties,
        handleClick,
      }}
    >
      {" "}
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
