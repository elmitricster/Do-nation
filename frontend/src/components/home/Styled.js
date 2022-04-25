import styled from 'styled-components';
import { Link } from 'react-router-dom';

const mainImg = styled.img``;

const box = styled.div`
  text-align: center;
`;

const carouselBox = styled.div`
  margin-top: 5vh;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const MainpageText = styled.h1`
  text-align: center;
  font-weight: bold;
`;

const guide = styled.div`
  display: inline-block;
  position: fixed;
  right: 5vh;
  bottom: 3vh;
  border-radius: 25px;
  background: #c3e5ae;
  width: 8vh;
  height: 4vh;
  text-align: center;
  line-height: 4vh;
`;

const switchLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export { mainImg, box, carouselBox, MainpageText, guide, switchLink };
