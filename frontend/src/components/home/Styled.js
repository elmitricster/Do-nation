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

const SubText = styled.div`
  text-align: center;
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
  background: #e32222;
  font-size: 0.8rem;
`;

const subject = styled.div`
  margin-top: 0.3rem;
  display: inline-block;
  width: 60%;
  height: 2rem;
  line-height: 2rem;
  border-radius: 25px;
  background: #8ac4ff;
  font-size: 0.8rem;
  color: black;
  text-decoration-line: none;
`;

const RightAr = styled.div`
  font-size: 0;
  line-height: 0;
  top: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: transparent;
  border: none;
  outline: 0;
  background: 0 0;

  &::before {
    content: '>' !important;
    font-size: 30px;
    line-height: 1;
    color: black;
    background: none;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    /* border: solid 1px #d2d2d2; */
  }
`;

const LeftAr = styled.div`
  font-size: 0;
  line-height: 0;
  top: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: transparent;
  border: none;
  outline: 0;
  background: 0 0;

  &::before {
    content: '<' !important;
    font-size: 30px;
    line-height: 1;
    color: black;
    background: none;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    /* border: solid 1px #d2d2d2; */
  }
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
  RightAr,
  LeftAr,
  SubText,
};
