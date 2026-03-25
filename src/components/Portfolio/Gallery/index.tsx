"use client";

import Slider from "react-slick";
import styles from './Gallery.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ImgItem = {
  img: string;
  title?: string;
};

type GalleryProps = {
  category: string;
  imgItems: ImgItem[];
};

const Gallery = ({ category, imgItems }: GalleryProps) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  if (!imgItems || imgItems.length === 0) {
    return null;
  }

  return (
      <Slider {...settings} className={styles.slider}>
        {imgItems.map((item) => (
          <div key={item.img} className={styles.item}>
            <img
              src={`/img/portfolio/${category.toLowerCase()}/${item.img}`}
              className={styles.image}
              alt={item.title || ''}
            />
          </div>
        ))}
      </Slider>
  );
};

export default Gallery;