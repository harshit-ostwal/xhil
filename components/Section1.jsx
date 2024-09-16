import Image from 'next/image'
import React from 'react'
import RightImg from "@/public/1.png"
import Link from 'next/link'

function Section1() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[85%] flex items-center justify-between">
                <div className="flex flex-col gap-10 leading-none">
                    <div className="flex flex-col font-Anton">
                        <h1 className="text-pink-400 text-[12rem]">META</h1>
                        <h1 className="text-lime-300 text-[12rem]">HACKATHON</h1>
                        <h1 className="text-[12rem]">WEEK</h1>
                    </div>
                    <p className="font-DM_Sans text-2xl w-full max-w-4xl">Join Our Online Desgin Hackathon To Showcase Your Creativity, Tackle Unique Challenges, & Win Incredible Prizes!</p>
                    <Link href="/" className="bg-pink-400 p-6 text-xl w-fit font-semibold font-mono tracking-wider rounded-md hover:bg-white hover:text-pink-400 duration-500">REGISTER TODAY</Link>
                </div>

                <div>
                    <Image src={RightImg} width={900} quality={100} alt="XHIL" />
                </div>
            </div>
        </div>
    )
}

export default Section1