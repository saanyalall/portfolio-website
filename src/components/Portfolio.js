import React from "react";

function Portfolio() {
  const portfolio = [
    {
      id: "1",
      src: "/assests/Screenshot 2023-07-20 134834.png",
      
    },

    {
      id: "2",
      src: "/assests/Screenshot 2023-07-20 134534.png",
     
    },

    {
      id: "3",
      src: "/assests/Screenshot 2023-07-20 134750.png",
      
    },

    {
      id: "4",
      src: "/assests/Screenshot 2023-07-20 134450.png",
      
    }
  ];
  return (

    <div name="portfolio" className=" h-full w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full p-4 text-white">
        <div className="mt-20 pt-18 sm: pt-23">
          <p className="h-full w-full text-4xl font-bold inline border-b-4 border-gray-500 p-2 my-4">
            Portfolio
          </p>
          <p className="py-6">Check out my work right here!</p>
        </div>


        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2  sm:px-0 gap-8 px-12 text-center">
          {portfolio.map(({ id, src }) => (
            
            <div key={id} className=" hover:scale-105 shadow-md shadow-gray-600 rounded-lg" >
              <img
                src={src}
                alt=""
                className=" hover:scale-105 rounded-md duration-500"
              />

          
              </div>
            
          ))}
        </div>
    </div>
    </div>
  );
}

export default Portfolio;
