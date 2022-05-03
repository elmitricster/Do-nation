import React from 'react';
import * as S from './Styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Creator from './Creator';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <S.carouselBox>
      <Slider {...settings}>
        {tmp.map((t, idx) => {
          return <Creator key={idx} src="1" cre="유튜버" sub="영화/만화" />;
        })}
      </Slider>
    </S.carouselBox>
  );
}
