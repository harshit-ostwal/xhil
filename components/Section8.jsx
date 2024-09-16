import Link from 'next/link'
import React from 'react'

function Section8() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[85%] flex flex-col items-start gap-10">
                <div className="flex flex-col">
                    <h1 className="text-9xl font-Anton custom-stroke">CONFERENCE</h1>
                    <h1 className="text-9xl font-Anton">PASSES</h1>
                </div>
                <div className="flex flex-col gap-10 w-full h-96 bg-white text-black p-20">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-Anton text-5xl">3 DAYS CONFERENCE PASS</h1>
                            <p className="text-3xl font-semibold">Full Access To The Entire 3 Days's Programming</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <h1 className="font-Anton text-5xl">$60 x</h1>
                            <input type="text" className="border-2 border-black text-5xl font-Anton w-40 text-center" placeholder="1" />
                        </div>
                    </div>
                    <div className="border-b-2 border-black w-full"></div>
                    <div className="flex items-center justify-between w-full">
                        <input type="text" className="border-2 border-black text-xl p-4 w-[30%]" placeholder="Discount Code" />
                        <Link href="/" className="bg-pink-400 p-6 text-xl w-fit font-semibold font-mono tracking-wider rounded-md hover:bg-white hover:text-pink-400 duration-500">CONTINUE</Link>
                        </div>
                </div>
            </div>
        </div >
    )
}

export default Section8