import styled from "styled-components";
import { Image } from "react-bootstrap";

export const Contents = styled.div`
  width: 80%;
  margin: 4.5rem auto;
  font-size: 0.8rem;

  @media ( min-width: 768px ) {
    width: 50%;
    margin: 7rem auto;
    font-size: 1rem;
  }

  @media ( min-width: 992px ) {
    width: 50%;
    margin: 7rem auto;
    font-size: 1rem;
  }
`

export const MainText = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

export const MenuText = styled.div`
  cursor: pointer;
  font-size: 1rem;
`

export const TopText = styled.div`
  text-align: start;
  font-size: 2rem;
  font-weight: bold;
`

export const GuideImage = styled(Image)`
  width: fluid;
`

export const GuideText = styled.div`
  font-size: 0.8rem;
`