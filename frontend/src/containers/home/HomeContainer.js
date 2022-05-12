import { useEffect } from 'react';
import MainImg from '../../components/home/MainImg';
import MainpageText from '../../components/home/MainpageText';
import Carousel from '../../components/home/Carousel';
import Guide from '../../components/home/Guide';

export function HomeContainer({ setJwt }) {
  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      setJwt(localStorage.getItem('jwt'));
    }
  });

  return (
    <>
      <MainImg />
      <MainpageText txt="관심있는 크리에이터를 찾아보세요" />
      <Carousel />
      <MainpageText txt="구독한 크리에이터" />
      <Carousel />
      <Guide />
    </>
  );
}
