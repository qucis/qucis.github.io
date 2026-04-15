import Link from 'next/link'
import Image from 'next/image'
const HeroAboutContainer = () => {
  return (
    <>
        <div className="w-full py-12 min-h-screen relative grid place-items-center">
          <div className="w-[80%] py-12 px-8 flex md:flex-row flex-col justify-around items-center gap-16 lg:gap-32 glass-panel">
            <div className='relative w-[300px] h-[300px] lg:w-[450px] rounded-[24px] lg:h-[550px] shadow-2xl border border-white/10 overflow-hidden'>
              <Image 
                src="/imgs/1.jpg" 
                alt="Quantum Information Lab" 
                fill 
                style={{objectFit: "cover"}} 
                priority 
              />
            </div>
            <div className="md:w-[50%] flex flex-col gap-6">
              <h1 className="font-unbounded font-bold relative text-[40px] md:text-6xl text-slate-100">
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
            
              <p className="font-asans md:text-lg text-slate-300 text-[15px] leading-relaxed">
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
