import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="py-10 w-[85%] flex items-center justify-between">

        {/* Left */}
        <Link href="" className="font-bold text-2xl tracking-tighter">
          <h1>HACKATHON</h1>
          <h1 className="text-pink-400">.COM</h1>
        </Link>

        {/* Centre */}
        <div className="flex gap-14">
          <Link href="/" className="font-medium text-lg hover:text-pink-400">Home</Link>
          <Link href="/" className="font-medium text-lg hover:text-pink-400">Speakers</Link>
          <Link href="/" className="font-medium text-lg hover:text-pink-400">Schedule</Link>
          <Link href="/" className="font-medium text-lg hover:text-pink-400">Stories</Link>
        </div>

        {/* Right */}
        <div>
          <Link href="/" className="bg-pink-400 p-4 font-semibold tracking-wider font-mono rounded-md hover:bg-white hover:text-pink-400 duration-500">REGISTER TODAY</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar