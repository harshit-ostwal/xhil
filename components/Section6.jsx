import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import SP1 from "@/public/Sponsors/bobble.png"
import SP2 from "@/public/Sponsors/Devfolio.png"
import SP4 from "@/public/Sponsors/microsoft.png"

const data = [
    { src: SP1, alt: "Sponsor 1" },
    { src: SP2, alt: "Sponsor 2" },
    { src: SP4, alt: "Sponsor 3" },
    { src: SP1, alt: "Sponsor 1" },
    { src: SP2, alt: "Sponsor 2" },
    { src: SP4, alt: "Sponsor 3" }
]

function Section6() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[85%] flex flex-col items-start gap-20">
                <div className="flex flex-col">
                    <h1 className="text-9xl font-Anton">SPONSORS</h1>
                </div>

                <div>
                    <Marquee loop={0} delay={0} speed={50} gradient={true} gradientColor="#1E003E" className="flex gap-40">
                        <div className="flex gap-40">
                            {data.map((data, index) => (
                                <Image key={index} src={data.src} alt={data.alt} quality={100} width={200} className="aspect-auto object-contain" />
                            ))}
                        </div>
                    </Marquee>
                </div>

            </div >
        </div >
    )
}

export default Section6