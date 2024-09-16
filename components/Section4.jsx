import React from 'react'

const data = [
  {
    "count": "4+",
    "desc": "FORMATS"
  },
  {
    "count": "5+",
    "desc": "WORKSHOPS"
  },
  {
    "count": "20+",
    "desc": "SPEAKERS"
  },
  {
    "count": "16+",
    "desc": "TALKS"
  }
]

function Section4() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[85%] flex text-center justify-evenly gap-10">
        {data.map((data, index) => (
          <div key={index} className="flex flex-col gap-6">
            <h1 className="text-9xl font-Anton text-purple-300">{data.count}</h1>
            <h1 className="text-3xl tracking-widest font-Anton">{data.desc}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section4