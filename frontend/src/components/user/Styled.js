import styled from 'styled-components';
import { Link } from 'react-router-dom';

const mainText = styled.h1`
  text-align: center;
  margin-top: 35vh;
  font-weight: bold;
`;

const kakaoLogin = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
`;

const switchLink = styled(Link)`
  text-decoration: none;
  color: grey;
`;

const box = styled.div`
  text-align: center;
  margin-top: 10vh;
`;

export { mainText, kakaoLogin, switchLink, box };
