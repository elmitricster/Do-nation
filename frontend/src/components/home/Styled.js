import styled from 'styled-components';
import { Link } from 'react-router-dom';

const mainImg = styled.img``;

const box = styled.div`
  text-align: center;
`;

const carouselBox = styled.div`
  margin-top: 3rem;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const MainpageText = styled.h1`
  text-align: center;
  font-weight: bold;
  margin-top: 3rem;
`;

const guide = styled.div`
  display: inline-block;
  position: fixed;
  right: 4rem;
  bottom: 2rem;
  border-radius: 25px;
  background: #c3e5ae;
  width: 5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
`;

const switchLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const cardBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const creator = styled.div`
  margin-top: 0.3rem;
  display: inline-block;
  width: 50%;
  height: 2rem;
  line-height: 2rem;
  border-radius: 25px;
  background: #fffdf6;
`;

const subject = styled.div`
  margin-top: 0.3rem;
  display: inline-block;
  width: 60%;
  height: 2rem;
  line-height: 2rem;
  border-radius: 25px;
  background: #8ac4ff;
`;

export {
  mainImg,
  box,
  carouselBox,
  MainpageText,
  guide,
  switchLink,
  cardBox,
  creator,
  subject,
};
