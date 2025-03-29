import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="flex flex-col items-center justify-center w-full bg-cover bg-[url('/figmaStuffs/thirdBg.png')] p-2 md:p-8 gap-6">
            <div className='h-[90%] w-full '>
                <div className='w-full h-[100%] grid grid-cols-2 md:grid-cols-4 py-6'>
                <div className='col-span-2 flex flex-col '>
                        <h1 className='text-white font-bj font-bold text-[32px] tracking-wide p-2'>QuCIS</h1>
                        <p className='text-white/60 font-source font-light text-[16px] tracking-wide p-2'>Quantum Computing and Information Systems Lab @ 
                        <a href="https://www.iiserb.ac.in/" target="_blank" rel="noopener noreferrer">
                            <span className='text-blue-500 text-md font-bj px-1'>IISER Bhopal</span>
                            </a>                        
                        </p>
                        <div className='flex gap-4 items-center p-2'>
                        <a href="https://github.com/qucis" target="_blank" rel="noopener noreferrer">
                            <img src='/icons/git.png' className='h-[24px]' />
                        </a>
                        </div>

                        <p className='text-white/60 font-source font-light text-[16px] tracking-wide p-2'>This website is maintained by
                            <a href="https://github.com/mainak-bhattacharyya" target="_blank" rel="noopener noreferrer">
                            <span className='text-blue-300 text-md font-bj px-1'>Mainak Bhattacharyya</span>
                            </a>
                            and the template is designed by
                            <a href="https://github.com/TanishqSharma2022" target="_blank" rel="noopener noreferrer">
                            <span className='text-blue-300 text-md font-bj ml-1'>Tanishq Sharma</span>
                            </a>
                            .
                        </p>
                        
                </div>
                {/* <div className='text-white/60 md:p-0 py-12 px-4'>
                    <ul className='flex flex-col gap-4 items-left justify-center  h-full '>
                        <li>Contact us</li>
                        <li>Privacy Notice</li>
                        <li>Accessibility</li>
                        <li>Terms of use</li>
                    </ul>
                </div>
                <div className='text-white/60'>
                <ul className='flex flex-col gap-4 items-left justify-center h-full '>

                        <li>Cookies</li>
                        <li>Freedom of Information</li>
                        <li>Sustainability</li>
                        <li>Modern</li>
                    </ul>
                </div> */}

                </div>

            </div>
            <div className='w-full h-0.5 bg-purple-300'></div>
            <div className='flex items-center justify-center gap-2 w-full mb-4'>
            <a
            className="flex items-center justify-center font-source gap-2 text-md opacity-80 text-white"
            target="_blank"
            rel="noopener noreferrer"
            >
            © 2025{' '}    

            {/* <span className='text-purple-300 text-md font-bj font-bold '>QuCIS</span> */}
            QuCIS. All Rights Reserved
            </a>

            </div>
        </footer>
    </div>
  )
}

export default Footer
