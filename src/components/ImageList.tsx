"use client";
import { useState } from 'react';
import SingleImage from './SingleImage';

const IMAGES_TO_LOAD = 20;
export default function ImageList({ data, artists }: {
  data: {
    [key: string]: {
      [key: string]: string
    }
  },
  artists: [
    {
      id: string,
      socialLinks: {
        instagram?: string
        twitter?: string
        shop?: string
        youtube?: string
        facebook?: string
        website?: string
      }
    }
  ]
}) {
  const [images, setImages] = useState([...Object.keys(data)].slice(0, IMAGES_TO_LOAD));

  return <div>
    <div className="grid grid-cols-1 gap-4 max-w-[2000px] mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {images.map((key) => {
        return <SingleImage key={key} data={data[key]} artists={artists} />
      })}
    </div>
    <button className="bg-white rounded-lg text-black font-bold py-2 px-4 mx-auto block mt-4" onClick={() => {
      setImages((prev) => {
        const next = [...Object.keys(data)].slice(prev.length, prev.length + IMAGES_TO_LOAD)
        return [...prev, ...next]
      })
    }}>Load More</button>
  </div>

}

