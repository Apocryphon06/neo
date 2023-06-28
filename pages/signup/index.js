import React from 'react'
import Header from '../(components)/Header'
const index = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="flex justify-center items-center lg:mx-10 mx-5 relative">
        <div className="bg-white lg:w-[1149px] w-full h-[548px] p-10 flex flex-col justify-center items-center m-auto shadow-2xl relative z-20 border-2 border-black">
          <div className="lg:w-[280px] w-full flex flex-col gap-2 justify-center items-center">
            <div className="text-center text-black text-[32px] font-bold leading-10">
              Welcome!
            </div>

            {/* form inputs */}
            <div className="flex flex-col gap-2 justify-center items-center mt-5 w-full">
              {['Email', 'Password'].map((item, index) => (
                <input
                  key={index + 1}
                  placeholder={item}
                  className="outline-none h-[48px] lg:w-[280px] w-full border-2 border-black p-2"
                />
              ))}
            </div>

            <div className="lg:w-[81px] w-full h-10 p-2 bg-purple-500 shadow border-2 border-black justify-center items-center gap-2.5 inline-flex">
              <button className="text-center text-white text-[16px] font-bold leading-tight">
                Sign Up
              </button>
            </div>
          </div>

          <div className="border-2 border-black mt-[94px] lg:w-[174px] h-[48px] flex justify-center gap-[31px]  items-center ">
            {[
              '/assets/facebook.png',
              '/assets/google.svg',
              '/assets/linkedin.svg',
            ].map((item, index) => (
              <img
                className="cursor-pointer"
                key={index + 1}
                src={item}
                alt="social_icon"
              />
            ))}
          </div>
        </div>
        <div className="bg-black lg:w-[1149px] w-full h-[548px] p-10 m-auto absolute z-10 lg:right-[98px] md:right-[-8px] right-[-8px] bottom-[-8px]"></div>
      </div>
    </React.Fragment>
  )
}

export default index
