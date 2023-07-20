import React from 'react'

function About() {
   
  const skills=[
    {
      id:"1",
      src:"/assests/icons8-html-48.png",
      title:"Html",
      style:"shadow-orange-500",
    },

    {
      id:"2",
      src:"/assests/icons8-css-96.png",
      title:"Css",
      style:"shadow-blue-500"
    },
    {
      id:"3",
      src:"/assests/icons8-javascript-50.png",
      title:"Javascript",
      style:"shadow-yellow-500"
    },

    {
      id:"4",
      src:"/assests/icons8-react-js-100.png",
      title:"React.js",
      style:"shadow-blue-800"
    },

    {
      id:"4",
      src:"/assests/icons8-tailwind-css-48.png",
      title:"Tailwind-Css",
      style:"shadow-blue-300"
    },

    {
      id:"5",
      src:"/assests/icons8-c++-48.png",
      title:"C++",
      style:"shadow-blue-500"
    }
  ]

  return (
    <div name="about" className="h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white">
    <div className= "max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4">
        <div className=' pb-8'>
            <h1 className='text-4xl
            font-bold border-gray-500 inline border-b-4'>About</h1>
        </div>
        <p className='text-xl mt-4 '>My name is Saanya Lall, I have completed my graduation(Btech) in electronics and comunication in 2023 from JSS ACADEMY OF
        TECHNICAL EDUCATION(JSSATEN), NOIDA. I have completed my X and Xll from Bishop Johnson School And College Allahabad.</p>
        <br/>
        <p className='text-xl'>Being a fresher I'm looking for an opportunity and challenges to grasp and expand my skills. I developed my skills in HTML , CSS , REACT.JS , TAILWIND CSS , C++ , OOPS.
        </p>
       <div className='w-full grid grid-cols-3 sm:grid-cols-3 sm:px-0 gap-8 py-6 text-center'>
      {skills.map(({id,src,title,style})=>(
         <div key={id} className={`shadow-md hover:scale-105 duration-500 rounded-lg py-2 ${style}`}>
         <img src={src} className=' w-11 mx-auto' />
         <p className='mt-4'>{title}</p>
         </div>
      ))}
     
      </div>

      </div>
    </div>
  )
}

export default About