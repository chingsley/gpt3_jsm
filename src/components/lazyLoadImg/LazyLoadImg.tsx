import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ImgProps {
  image: {
    src: string;
    alt: string;
  };
}
const LazyLoadImg: React.FC<ImgProps> = ({ image }) => {
  return <LazyLoadImage src={image.src} alt={image.src} />;
};

export default LazyLoadImg;
