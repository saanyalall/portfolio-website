import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-scroll';
function Home() {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className=" max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" px-3 flex flex-col justify-center h-full">
          <h2 className=" sm:text-5xl text-2xl  font-bold text-white">I'm a frontend developer</h2>
          <p className="text-gray-500 py-3 max-w-screen-md">
            Being a fresher I might think I'm flexible and adaptive to learn new
            things. I don't have any practical achievements to talk about. This
            give me the liberty to explore my potential by giving my best for
            this organisation.It will be an honour to work here and identify and
            develop my strength.I can assure you that I will be an asset to this
            company if I'm chosen to contribute. Thanku!
          </p>
          <div>
            <Link to="Portfolio" smooth duration={500} className="text-white w-fit bg-blue-500 py-2 my-2 px-4 flex justify-center rounded-md">
              Portfolio 
              <IoIosArrowDroprightCircle className="mx-2 my-1 hover:rotate-90 
              duration-300"/>
            </Link>
          </div>
        </div>

<div >
<img src="./assests/saanyaImage.jpeg" alt="my profile" className="w-2/5 rounded-3xl mx-auto"></img>

</div>

      </div>
    </div>
  );
}

export default Home;
