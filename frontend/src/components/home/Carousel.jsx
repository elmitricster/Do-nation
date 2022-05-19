import React from 'react';
import { NavLink } from 'react-router-dom';
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

export default function Carousel({ creators }) {
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

  return (
    <S.carouselBox>
      <Slider {...settings}>
        {creators.map((creator, idx) => {
          return (
            <NavLink key={idx} to={`/profile/${creator.nickname}/articles`} style={{ textDecoration: 'none' }}>
              <Creator key={idx} src={creator.profileImage} nickname={creator.nickname} />
            </NavLink>
          );
        })}
      </Slider>
    </S.carouselBox>
  );
}
