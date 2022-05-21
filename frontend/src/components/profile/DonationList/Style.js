import styled from 'styled-components';
import { Image, Col } from 'react-bootstrap';

export const Icon = styled(Image)`
  width: 2rem;
  margin: 1rem;
`;

export const bestMember = styled(Col)`
  align-items: center;
`;

export const Contents = styled.div`
  position: relative;
  width: 80%;
  margin: 4.5rem auto;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    width: 50%;
    margin: 7rem auto;
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    width: 40%;
    margin: 7rem auto;
    font-size: 1rem;
  }
`;
