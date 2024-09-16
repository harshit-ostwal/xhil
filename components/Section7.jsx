import Image from 'next/image'
import React from 'react'
import SP1 from "@/public/1.png"

function Section7() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[85%] flex flex-col items-start gap-20">
                <div className="flex flex-col">
                    <h1 className="text-9xl font-Anton">PRIZES</h1>
                    <p className="text-2xl max-w-4xl">Get Ready To Launch Your Project! The Top Performers Will Receive Awards, Prizes & Recognition</p>
                </div>

                <div className="flex gap-2 w-full">
                    <div className="bg-violet-700 flex flex-col gap-14 items-center justify-center rounded-lg w-full">
                        <div className="flex flex-col items-center">
                            <h1 className="font-Anton custom-stroke text-6xl tracking-widest">METAVERSE</h1>
                            <h1 className="font-Anton text-8xl tracking-widest">VISIONARY</h1>
                        </div>
                        <h1 className="text-lime-400 font-Anton text-9xl">$50K</h1>
                        <p className="text-center max-w-xl text-2xl font-semibold">Prepare For The Project Launch! Outstanding Contributors Will Be Rewarded With Awards, Prizes & Acknowledgment.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex gap-4 bg-violet-700 rounded-lg p-10 items-center justify-center">
                            <div>
                                <Image src={SP1} width={200} className="bg-lime-400 p-4 rounded-full" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <h1 className="font-Anton text-6xl text-lime-400">$30K</h1>
                                <p className="text-2xl font-semibold font-mono">Immersive Interaction</p>
                            </div>
                        </div>
                        <div className="flex gap-4 bg-violet-700 rounded-lg p-10 items-center justify-center">
                            <div>
                                <Image src={SP1} width={200} className="bg-amber-400 p-4 rounded-full" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <h1 className="font-Anton text-6xl text-amber-400">$30K</h1>
                                <p className="text-2xl font-semibold font-mono">Virtual Crowd's Choice</p>
                            </div>
                        </div>
                        <div className="flex gap-4 bg-violet-700 rounded-lg p-10 items-center justify-center">
                            <div>
                                <Image src={SP1} width={200} className="bg-purple-400 p-4 rounded-full" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <h1 className="font-Anton text-6xl text-purple-400">$30K</h1>
                                <p className="text-2xl font-semibold font-mono">Metaverse For Good</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    )
}

export default Section7