import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <Link href="/">
        <img src="/assets/logo.svg" className="w-[80px] h-[80px]" />
      </Link>

      <div className="lg:flex hidden justify-center items-center ">
        {['Service', 'Api', 'Company', 'Pricing'].map((item, index) => (
          <p
            key={index + 1}
            className="font-sans text-base text-black cursor-pointer px-[39.5px]"
          >
            {item}
          </p>
        ))}

        <div className="w-[109px] h-10 p-2 bg-purple-500 shadow border-2 border-black justify-center items-center gap-2.5 inline-flex ml-[39.5px]">
          <button className="text-center text-white text-[16px] font-bold leading-tight">
            <Link href="/signup">Sign up</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
