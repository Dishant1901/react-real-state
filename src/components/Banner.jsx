import React from "react";

// import images
import Image from "../assets/img/house-banner.png";

// import Components
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 ">
      <div className="flex flex-col md:flex-row">
        <div className="lg:ml-8 flex flex-col  items-center md:items-start text-center md:text-left justify-center flex-1 px-4 md:p-0 ">
          <h1 className="text-4xl md:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With Us.
          </h1>
          <p className="max-w-[480px] mb-6 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            ad facilis inventore velit, nesciunt eaque consectetur ex? Sed quae
            iusto alias obcaecati maiores odio consectetur neque. Velit tempora
            enim eveniet.
          </p>
        </div>
        {/* images  */}
        <div className=" hidden flex-1 md:flex justify-end items-end">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
