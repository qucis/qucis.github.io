// components/SubstackFeed.js

import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { BarLoader } from 'react-spinners';
import axios from 'axios';
import { GiArrowhead } from 'react-icons/gi';

import { FaArrowRight } from "react-icons/fa";
const SubstackFeed = () => {
  const [loading, setLoading] = useState(true)
//   useEffect(() => {
//     try{
//     setLoading(true)
//     window.SubstackFeedWidget = {
//         substackUrl: "quantumpirates.substack.com",
//         posts: 3,
//         filter: "top",
//         layout: "right",
//         hidden: ["subtitle", "reactions"],
//         colors: {
//           primary: "#404040",
//           secondary: "#808080",
//           background: "white",
//         }
//     }

//     const script = document.createElement("script");
//     script.src = "https://substackapi.com/embeds/feed.js";
//     script.async = true;
//     document.getElementById("substack-feed-embed").appendChild(script);
// }finally{
//     setLoading(false)
// }
//     return () => {
//       // Clean up script when the component unmounts
//       document.getElementById("substack-feed-embed").removeChild(script);
//     };
//   }, []);

const [news, setNews] = useState([])

const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

useEffect(() => {
  // Inside a function to use async/await
  const fetchData = async () => {
    try {
      setLoading(true);
      await axios.get(`https://gnews.io/api/v4/search?q=Quantum%20COmputing&lang=en&country=us&max=3&apikey=${API_KEY}`).then((res) => {return res.data.articles}).then((data) => 
        setNews(data)
      );

      } 
    
     finally {
      console.log(news)
      setLoading(false);
    }
  };

  fetchData();

}, []);


  return <>
  <div className=' text-black  rounded-[24px]    md:p-6 flex   md:grid  md:grid-cols-2 w-screen overflow-scroll md:overflow-hidden lg:grid-cols-3 items-center md:justify-center min-w-[70%]' id="substack-feed-embed">
    

  {news.map((article, index) => { 
    return <div key={index} className=' rounded-[16px]  p-6 w-full flex  justify-center flex-col min-w-[70%]'>
      <img src={article.image} className='w-full drop-shadow-xl md:h-[400px] h-[300px] shadow-lg  object-cover rounded-[16px]' />
      <h1 className='text-lg lg:text-xl mt-6 font-unbounded font-semibold'>{article.title}</h1>
      <p className='text-gray-500 text-sm lg:text-md font-asans mt-2'>{article.description}</p>
      <a href={article.url} target='_blank' className='text-blue-500 font-asans mt-4 flex items-center  gap-4 group hover:underline'>Read more <FaArrowRight className='group-hover:ml-3 transition-all' /></a>
    </div>    

  })}
  
  {loading && <div className='flex w-full mx-auto border flex-col gap-6 justify-center items-center p-6'>
    <h1 className='text-xl font-semibold'>Loading the latest news...</h1>
    <BarLoader />
    
    </div>}
    </div>;
  </>
};

export default SubstackFeed;
