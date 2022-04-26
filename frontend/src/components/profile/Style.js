import styled from 'styled-components';
import { Image } from 'react-bootstrap';

export const ProfileImg = styled(Image)`
  width: 9rem;
  height: 9rem;
`;

export const Contents = styled.div`
  width: 80%;
  margin: 4.5rem auto;
  margin-bottom: 0;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    width: 50%;
    margin: 7rem auto;
    margin-bottom: 0;
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    width: 40%;
    margin: 7rem auto;
    margin-bottom: 0;
    font-size: 1rem;
  }
`;

export const NinknameBox = styled.div`
  text-align: start;
  font-size: 1.5rem;
`;

export const Category = styled.div`
  float: left;
  border: solid 1px #94bdfb;
  background-color: #94bdfb;
  border-radius: 0.3rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
  height: 2rem;
  font-size: 0.9rem;
  padding: 1rem;
  text-align: center;
  line-height: 0rem;
`;

export const MyButton = styled.button`
  float: left;
  border: solid 1px #4a91fc;
  background-color: #4a91fc;
  border-radius: 0.3rem;
  height: 2rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
  color: white;
  font-size: 0.9rem;
  width: 6rem;
`;

export const URLText = styled.div`
  text-align: start;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const URLButton = styled.button`
  float: left;
  border: solid 1px ${props => (props.color ? props.color : '')};
  background-color: ${props => (props.color ? props.color : '')};
  border-radius: 0.3rem;
  height: 2rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
  color: white;
  font-size: 0.9rem;
  width: 6rem;
`;

export const ContentBox = styled.div`
  height: 7rem;
  border: solid 1px black;
  font-size: 0.9rem;
  text-align: start;
  padding: 0.5rem;
`;

export const Line = styled.div`
  text-align: center;
  border-top: solid 2px; black;
  margin-top: 3rem;
  width: 80%;
  height: 0;
`;
