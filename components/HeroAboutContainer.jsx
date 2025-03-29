import React from 'react'
import Link from 'next/link'
const HeroAboutContainer = () => {
  return (
    <>
        <div className="w-full py-12 min-h-screen relative  grid place-items-center">
          {/* <div className='absolute w-[44%] h-full bg-gradient-to-br from-violet-400 to-purple-600 top-0 left-0 z-[-1]'></div> */}
          <div className=" w-[80%] py-12 flex md:flex-row flex-col justify-around items-center gap-32 ">
            <div className='w-[300px] h-[300px] lg:w-[500px] rounded-[24px] lg:h-[600px] bg-[url(/imgs/1.jpg)] bg-cover shadow-[15px_15px_0px_0px_rgba(0,0,20)]'></div>
            <div className="md:w-[50%] flex flex-col gap-6 ">
              <h1 className="font-unbounded font-bold  relative  text-[40px] md:text-6xl  text-black/80">
                Our Mission, Our Vision
       
                    <svg className='absolute -top-44  hidden lg:block -right-24' width='400' height='400' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
        <g strokeWidth="10" stroke="hsl(0, 0%, 30%)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="64.5 28" transform="matrix(-0.13917310096006535,0.9902680687415704,-0.9902680687415704,-0.13917310096006535,954.7764678806543,59.562012887398)">
          <path d="M250.17772483825684 250Q185.17772483825684 466 400.17772483825684 400Q614.1777248382568 302 550.1777248382568 550 " markerEnd="url(#SvgjsMarker2067)"></path>
        </g>
        <defs>
          <marker markerWidth="10" markerHeight="10" refX="5" refY="5" viewBox="0 0 10 10" orient="auto" id="SvgjsMarker2067">
            <polyline points="0,5 5,2.5 0,0" fill="none" strokeWidth="1.6666666666666667" stroke="hsl(0, 0%, 30%)" strokeLinecap="round" transform="matrix(1,0,0,1,1.6666666666666667,2.5)" strokeLinejoin="round"></polyline>
          </marker>
        </defs>
      </svg>

              </h1>
            
              <p className="font-asans md:text-lg text-gray-500    text-[15px]">
              we are dedicated to push the boundaries of quantum information and exploring 
              the frontiers of quantum computation. We delve into the most cutting-edge 
              aspects of quantum error correction, quantum algorithms,
              quantum networks and more.
              </p>

                <Link
                  href="/about"
                  className=""
                >
              <button className="  px-4 py-2 font-semibold rounded-[16px] justify-between font-asans
              
              
            bg-gradient-to-r from-purple-500 drop-shadow-xl to-purple-500    
              
              text-white flex items-center  gap-4 hover:bg-black hover:text-white group transition-all">
                  Read More

                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  className=''
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L7 7L2 12"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className='group-hover:stroke-purple-400 transition-all'
                  />
                </svg>
              </button>
                </Link>
            </div>
          </div>
        </div>



    </>
  )
}

export default HeroAboutContainer
