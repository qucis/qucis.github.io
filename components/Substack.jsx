import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default async function SubstackFeed() {
  const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
  let news = [];

  try {
    const res = await fetch(`https://gnews.io/api/v4/search?q=Quantum%20Computing&lang=en&country=us&max=3&apikey=${API_KEY}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (res.ok) {
      const data = await res.json();
      news = data.articles || [];
    }
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }

  return (
    <div className='text-black rounded-[24px] md:p-6 flex md:grid md:grid-cols-2 w-full max-w-6xl mx-auto overflow-x-auto md:overflow-hidden lg:grid-cols-3 items-center md:justify-center' id="news-feed-container">
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} className='rounded-[16px] p-6 w-full flex justify-center flex-col min-w-[70%]'>
            <div className='relative w-full drop-shadow-xl md:h-[200px] h-[180px] shadow-lg overflow-hidden rounded-[16px]'>
              <Image 
                src={article.image || '/imgs/1.jpg'} 
                alt={article.title} 
                fill 
                style={{objectFit: "cover"}} 
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h1 className='text-slate-900 text-lg lg:text-xl mt-6 font-unbounded font-semibold'>
              {article.title}
            </h1>
            <p className='text-slate-600 text-sm lg:text-md font-asans mt-2 line-clamp-3'>
              {article.description}
            </p>
            <a href={article.url} target='_blank' rel="noopener noreferrer" className='text-[var(--primary-accent)] font-asans mt-4 flex items-center gap-4 group hover:underline'>
              Read more <FaArrowRight className='group-hover:ml-3 transition-all' />
            </a>
          </div>    
        ))
      ) : (
        <div className='col-span-full flex w-full mx-auto flex-col gap-6 justify-center items-center p-6 text-slate-600 rounded-2xl border border-gray-100 shadow-sm'>
          <h1 className='text-xl font-semibold text-slate-800'>No recent news available.</h1>
          <p>Please check back later.</p>
        </div>
      )}
    </div>
  );
}
