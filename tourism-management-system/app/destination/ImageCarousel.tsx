'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import './ImageCarousel.css';
const SimpleImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { src: "/images/places/munnar.jpeg", alt: "Munnar" ,width:300 ,height:200},
    { src: "/images/places/ooty.jpeg", alt: "Ooty" ,width:300 ,height:200},
    { src: "/images/places/kodaikanal.jpeg", alt: "Kodaikanal" ,width:300 ,height:200 },
    { src: "/images/places/varkala.jpeg", alt: "Varkala" ,width:300 ,height:200},
    { src: "/images/places/vagamon.jpeg", alt: "Vagamon" ,width:300 ,height:200},
    { src: "/images/places/munroe.jpeg", alt: "Munroe Island" ,width:300 ,height:200},
    { src: "/images/places/kozhikkode.jpeg", alt: "Kozhikode" ,width:300 ,height:200},
    { src: "/images/places/wayanad.jpeg", alt: "Wayanad" ,width:300 ,height:200}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="simple-carousel">
      <button 
        className="simple-carousel-arrow simple-carousel-arrow-left" 
        onClick={goToPrevious}
      >
        <MdArrowBackIos />
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div className="simple-carousel-image-container">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`simple-carousel-image-wrapper ${index === currentIndex ? 'active' : ''}`}
          >
            {index === currentIndex && (
              <>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="simple-carousel-image" 
                />
                <div className="simple-carousel-caption">{image.alt}</div>
              </>
            )}
          </div>
        ))}
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button 
        className="simple-carousel-arrow simple-carousel-arrow-right" 
        onClick={goToNext}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default SimpleImageCarousel;