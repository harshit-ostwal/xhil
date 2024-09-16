import Image from 'next/image'
import React from 'react'
import RightImg from "@/public/2.png"
import LeftImg from "@/public/3.png"
import Link from 'next/link'

function Section2() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full">
                <Image src={LeftImg} width={900} quality={100} alt="XHIL" />
            </div>

            <div className="font-Anton flex items-center flex-col gap-10">
                <h1 className="text-5xl text-lime-400">10 FEB - 12 FEB 2024</h1>
                <div className="flex flex-col items-center">
                    <h1 className="text-9xl text-nowrap">UNLOCKING THE</h1>
                    <h1 className="text-9xl">METAVERSE</h1>
                </div>
                <Link href="/" className="p-6 bg-white text-background text-xl w-fit font-semibold font-mono tracking-wider rounded-md hover:bg-pink-400 hover:text-white duration-500">LEARN MORE</Link>
            </div>

            <div className="w-full">
                <Image src={RightImg} width={900} quality={100} alt="XHIL" />
            </div>
        </div>
    )
}

export default Section2