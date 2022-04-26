import styled from 'styled-components';
import { Image } from 'react-bootstrap';

export const ProfileImg = styled(Image)`
  margin-top: 3rem;
  width: 35%;

  @media ( min-width: 768px ) {
    margin-top: 3rem;
    width: 25%;
  }

  @media ( min-width: 992px ) {
    margin-top: 3rem;
    width: 15%;
  }
`

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
    width: 40%;
    margin: 7rem auto;
    font-size: 1rem;
  }
`

export const ContentText = styled.div`
  text-align: start;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  margin: 0.5rem auto;
  border: solid 1px black;
  border-radius: 0.3rem;
  height: 2rem;

  &:focus {
    border: solid 1px #94BDFB;
    outline: solid 1px #94BDFB;
  }
`

export const LeftInput = styled.input`
  margin: 0.5rem auto;
  background-color: #8AC4FF;
  border: solid 1px #8AC4FF;
  border-radius: 0.3rem;
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
  height: 2rem;
  text-align: center;

  &:focus {
    border: solid 1px #94BDFB;
    outline: solid 1px #94BDFB;
  }
`

export const RightInput = styled.input`
  margin: 0.5rem auto;
  border: solid 1px black;
  border-left: 0;
  border-radius: 0.3rem;
  border-top-left-radius: 0rem;
  border-bottom-left-radius: 0rem;
  height: 2rem;
  padding: 0.5rem;

  &:focus {
    border: solid 1px #94BDFB;
    outline: solid 1px #94BDFB;
  }
`

export const LeftBox = styled.div`
  float: left;
  margin: 0.5rem auto;
  background-color: #8AC4FF;
  border: solid 1px #8AC4FF;
  border-radius: 0.3rem;
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
  height: 2rem;
  padding: 0.5rem;

  &:focus {
    border: solid 1px #94BDFB;
    outline: solid 1px #94BDFB;
  }
`

export const RightBox = styled.div`
  float: left;
  margin: 0.5rem auto;
  border: solid 1px black;
  border-left: 0;
  border-radius: 0.3rem;
  border-top-left-radius: 0rem;
  border-bottom-left-radius: 0rem;
  height: 2rem;
  padding: 0.5rem;
  overflow: auto;
  ::-webkit-scrollbar { display: none; }

  &:focus {
    border: solid 1px #94BDFB;
    outline: solid 1px #94BDFB;
  }
`

export const MyButton = styled.button`
  border: solid 1px #94BDFB;
  background-color: #94BDFB;
  border-radius: 0.3rem;
  height: 2rem;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 0.9rem;
`

export const CategoryButton = styled.button`
  background-color: ${({ props, id }) => (props[id] ? '#94BDFB' : '#FFFDF6')};
  font-weight: ${({ props, id }) => (props[id] ? 700 : 'normal')};
  border: solid 1px #FFFDF6;
  border-radius: 0.3rem;
  height: 2rem;
  margin-top: 0.5rem;
  font-size: 0.5rem;
  width: 100%;

  @media ( min-width: 768px ) {
    width: 100%;
    font-size: 0.7rem;
  }

  @media ( min-width: 992px ) {
    width: 100%;
    font-size: 0.7rem;
  }
`