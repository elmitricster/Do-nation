import React from 'react';
import * as S from './Styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Creator from './Creator';

const RightArrow = props => {
  const { className, onClick } = props;
  return <S.RightAr className={className} onClick={onClick} />;
};

const LeftArrow = props => {
  const { className, onClick } = props;
  return <S.LeftAr className={className} onClick={onClick} />;
};

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
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
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
