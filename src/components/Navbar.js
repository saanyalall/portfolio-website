import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';
function Navbar() {
  const [nav, setNav] = useState(false);

  const Links = [ 
    {
      id: 1,
      link: "home",
    },
 
    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "portfolio",
    },

    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div
      className="flex justify-between items-start w-full h-20
   px-4 text-white bg-black fixed"
    >
      <div>
        <h1 className=" text-5xl font-serif my-2">Saanya</h1>
      </div>

      <ul className="hidden md:flex">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className=" text-gray-400 px-4 capitalize font-medium cursor-pointer hover:scale-110 my-6 duration-200"
          >
            <Link to={link} smooth duration={500} >
            {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="my-6 cursor-pointer text-gray-400 md:hidden "
      >
        {nav ? <RxCross2 size={30} /> : <BiMenu size={30} />}
      </div>

      {nav && (
      
        <ul className="w-1/2 flex flex-col items-start justify-center absolute top-0 my-20 ml-80 bg-gradient-to-b from-black to-gray-800  text-gray-400">
        {Links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer py-6 capitalize text-4xl">
          <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500} >
            {link}
            </Link>
          </li>
        ))}
      </ul>

      ) }
    </div>
  );
}

export default Navbar;
