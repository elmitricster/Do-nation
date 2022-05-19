import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import MainImg from '../../components/home/MainImg';
import MainpageText from '../../components/home/MainpageText';
import SubText from 'components/home/SubText';
import Carousel from '../../components/home/Carousel';
import Guide from '../../components/home/Guide';
import Home1 from 'components/home/home1.png';
import Home2 from 'components/home/home2.png';
import Home3 from 'components/home/home3.png'
import { apiInstance } from 'api';

export function HomeContainer() {
  const [random, setRandom] = useState();
  const [follow, setFollow] = useState();
  const api = apiInstance();

  const getRandom = async () => {
    const response = await api.get('/user/random')
    return response
  };

  const getFollow = async () => {
    const response = await api.get('/follow/following')
    return response
  };

  useEffect(() => {
    getRandom()
      .then(res => {
        setRandom(res.data)
      })

    getFollow()
      .then(res => {
        setFollow(res.data)
      })
  }, [])

  return (
    <>  
      <div style={{ height: '10rem'}}></div>
      <Image src={Home3} style={{ width: '20%' }} />
      <div style={{ height: '10rem'}}></div>
      <Image src={Home1} style={{ width: '40%' }} />
      <div style={{ height: '10rem'}}></div>
      <Image src={Home2} style={{ width: '50%' }} />
      <div style={{ height: '10rem'}}></div>

      <MainpageText txt="관심있는 크리에이터를 찾아보세요" />
      {random ? <Carousel creators={random}/> : <></>}
      <MainpageText txt="구독한 크리에이터" />
      {follow ? 
        <Carousel creators={follow}/>
      :
        <SubText txt="구독한 크리에이터가 없습니다." />
      }
      <Guide />
    </>
  );
}
