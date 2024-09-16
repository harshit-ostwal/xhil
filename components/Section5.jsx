import React from 'react'

function Section5() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[85%] flex flex-col items-start gap-10">
                <div className="flex flex-col">
                    <h1 className="text-9xl font-Anton custom-stroke">3 DAYS</h1>
                    <h1 className="text-9xl font-Anton">HACKATHON</h1>
                </div>
                <p className="text-2xl max-w-5xl">Connect With Designers Worldwide, Celebrating World-Class Content & Forging Connections Across Indusries, Vertical & Geographical Boundaries.</p>

                <div className="flex gap-2 w-full">
                    <div className="bg-pink-400 w-full p-10 flex flex-col gap-4 rounded-lg">
                        <div className="flex">
                            <span className="border-l-2 border-white"></span>
                            <p className="bg-black p-2 font-semibold text-white">DAY 1</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-5xl font-bold">Kickoff &</h1>
                            <h1 className="text-5xl font-bold">Orientation</h1>
                        </div>
                    </div>
                    <div className="bg-pink-400 w-full p-10 flex flex-col gap-4 rounded-lg">
                        <div className="flex">
                            <span className="border-l-2 border-white"></span>
                            <p className="bg-black p-2 font-semibold text-white">DAY 2</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-5xl font-bold">Building &</h1>
                            <h1 className="text-5xl font-bold">Collaborating</h1>
                        </div>
                    </div>
                    <div className="bg-pink-400 w-full p-10 flex flex-col gap-4 rounded-lg">
                        <div className="flex">
                            <span className="border-l-2 border-white"></span>
                            <p className="bg-black p-2 font-semibold text-white">DAY 3</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-5xl font-bold">Presentation</h1>
                            <h1 className="text-5xl font-bold">& Judging</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Section5