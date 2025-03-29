"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image"; // Importing for gallery display, not for dimension detection

// Define the images without width/height properties
const images = [
    {
      src: "/gallery/IISC-Fujitsu-24/train1.png",
      caption: "",
    },
    {
      src: "/gallery/IISC-Fujitsu-24/iisc1.png",
      caption: "",
    },
    {
      src: "/gallery/IISC-Fujitsu-24/iisc2.png",
      caption: "",
    },
    {
      src: "/gallery/IISC-Fujitsu-24/iisc3.png",
      caption: "",
    },
    {
      src: "/gallery/IISC-Fujitsu-24/iisc4.png",
      caption: "",
    },
    {
      src: "/gallery/IISC-Fujitsu-24/iisc5.png",
      caption: "",
    },
  ];

const GalleryGrid = () => {
  const [imageDimensions, setImageDimensions] = useState({});

  useEffect(() => {
    // Function to load image and get dimensions
    const loadImageDimensions = async () => {
      const dimensions = {};
      for (const image of images) {
        const img = new window.Image();  // Use native Image constructor
        img.src = image.src;
        img.onload = () => {
          dimensions[image.src] = { width: img.width, height: img.height };
          setImageDimensions((prev) => ({
            ...prev,
            [image.src]: { width: img.width, height: img.height },
          }));
        };
      }
    };

    loadImageDimensions();
  }, []);

  const lightbox = new PhotoSwipeLightbox({
    gallery: "#my-gallery",
    children: "a",
    pswpModule: () => import("photoswipe"),
  });
  lightbox.init();

  return (
    <div className="px-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24">
      <Gallery id="my-gallery" withCaption>
        {images.map((image, index) => {
          const dimensions = imageDimensions[image.src] || { width: 1024, height: 768 }; // Default to a safe width/height if not yet loaded

          return (
            <Item
              key={index}
              id={image.src}
              caption={image.caption}
              original={image.src} // Ensure the high-resolution image is used here
              width={dimensions.width} // Use the detected width
              height={dimensions.height} // Use the detected height
            >
              {({ ref, open }) => (
                <div className="group relative">
                  <Image
                    ref={ref}
                    onClick={open}
                    height={300} // Thumbnail size for gallery view
                    width={400}  // Thumbnail size for gallery view
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
          );
        })}
      </Gallery>
    </div>
  );
};

export default GalleryGrid;
