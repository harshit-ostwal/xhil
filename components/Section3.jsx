import React from 'react'
import Link from 'next/link'

function Section3() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[85%] flex flex-col items-start gap-10">
        <div className="flex flex-col">
          <h1 className="text-9xl font-Anton custom-stroke">OUR</h1>
          <h1 className="text-9xl font-Anton">SPEAKERS</h1>
        </div>

        <div className="">

        </div>

        <Link href="/" className="bg-pink-400 p-6 text-xl w-fit font-semibold font-mono tracking-wider rounded-md hover:bg-white hover:text-pink-400 duration-500">VIEW ALL SPEAKERS</Link>
      </div>
    </div>
  )
}

export default Section3