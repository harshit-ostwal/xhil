import React from 'react'

function Footer() {
  return (
    <div className="w-full flex flex-col gap-20 items-center justify-center py-20">
      <div className="w-[85%] flex gap-20">
        <div className="flex flex-col font-Anton text-6xl gap-2 w-full">
          <h1>UNLEASH</h1>
          <h1>INNOVATION,</h1>
          <div className="flex items-end justify-between w-full">
            <h1 className="text-white/80">CODE YOUR DREAMS!</h1>

            <div className="uppercase flex gap-20 text-3xl">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <h1 className="font-mono text-xl font-semibold">Build By Harshit Ostwal</h1>
      </div>
    </div>
  )
}

export default Footer