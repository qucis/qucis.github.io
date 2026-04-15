'use client'

import { Gallery, Item } from 'react-photoswipe-gallery'
import { useEffect, useState } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import Image from 'next/image'

const PhotoGalleryGrid = ({ images, galleryId }) => {
  const [imageDimensions, setImageDimensions] = useState({})

  useEffect(() => {
    for (const image of images) {
      const img = new window.Image()
      img.src = image.src
      img.onload = () => {
        setImageDimensions((previous) => ({
          ...previous,
          [image.src]: { width: img.width, height: img.height },
        }))
      }
    }
  }, [images])

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryId}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })

    lightbox.init()

    return () => {
      lightbox.destroy()
    }
  }, [galleryId])

  return (
    <div className="px-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24">
      <Gallery id={galleryId} withCaption>
        {images.map((image, index) => {
          const dimensions = imageDimensions[image.src] || { width: 1024, height: 768 }

          return (
            <Item
              key={image.src || index}
              id={image.src}
              caption={image.caption}
              original={image.src}
              width={dimensions.width}
              height={dimensions.height}
            >
              {({ ref, open }) => (
                <div className="group relative">
                  <Image
                    ref={ref}
                    onClick={open}
                    height={300}
                    width={400}
                    src={image.src}
                    alt={image.caption}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg cursor-pointer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.caption}
                  </div>
                </div>
              )}
            </Item>
          )
        })}
      </Gallery>
    </div>
  )
}

export default PhotoGalleryGrid
