import styled from 'styled-components';
import { Image } from 'react-bootstrap';

export const ProfileImg = styled(Image)`
  margin-top: 3rem;
  width: 35%;

  @media (min-width: 768px) {
    margin-top: 3rem;
    width: 25%;
  }

  @media (min-width: 992px) {
    margin-top: 3rem;
    width: 35%;
  }
`;

export const Contents = styled.div`
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

export const ContentText = styled.div`
  text-align: start;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.textarea`
  resize: none;
  margin: 0.5rem auto;
  border: solid 1px black;
  border-radius: 0.3rem;
  height: 2rem;
  font-size: 0.8rem;

  &:focus {
    border: solid 1px #94bdfb;
    outline: solid 1px #94bdfb;
  }
`;

export const LeftInput = styled.input`
  margin: 0.5rem auto;
  background-color: #8ac4ff;
  border: solid 1px #8ac4ff;
  border-radius: 0.3rem;
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
  height: 2rem;
  text-align: center;

  &:focus {
    border: solid 1px #94bdfb;
    outline: solid 1px #94bdfb;
  }
`;

export const LeftBox2 = styled.div`
  float: left;
  background-color: #8ac4ff;
  border: solid 1px #8ac4ff;
  border-radius: 0.3rem;
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
  height: 2rem;
  text-align: center;
  color: white;
  line-height: 2rem;
  font-size: 0.9rem;
`;

export const Menu = styled.ul`
  background: #fff;
  border-radius: 8px;
  position: absolute;
  top: 2rem;
  font-size: 0.8rem;
  width: 10rem;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(-20px)')};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  padding: 10px;
`;

export const MyLi = styled.li`
  list-style: none;
  color: black;

  &:hover {
    border: solid 1px #94bdfb;
    outline: solid 1px #94bdfb;
    border-radius: 8px;
  }
`;

export const RightInput = styled.input`
  border: solid 1px black;
  border-left: 0;
  border-radius: 0.3rem;
  border-top-left-radius: 0rem;
  border-bottom-left-radius: 0rem;
  height: 2rem;
  padding: 0.5rem;
  font-size: 0.8rem;

  &:focus {
    border: solid 1px #94bdfb;
    outline: solid 1px #94bdfb;
  }
`;

export const LeftBox = styled.div`
  float: left;
  margin: 0.5rem auto;
  background-color: #8ac4ff;
  border: solid 1px #8ac4ff;
  border-radius: 0.3rem;
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
  height: 2rem;
  padding: 0.5rem;
  text-align: center;
  color: white;
  line-height: 1rem;
  font-size: 0.8rem;

  &:focus {
    border: solid 1px #94bdfb;
    outline: solid 1px #94bdfb;
  }
`;

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
  font-size: 0.8rem;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    border: solid 1px #94bdfb;
    outline: solid 1px #94bdfb;
  }
`;

export const MyButton = styled.button`
  border: solid 1px #94bdfb;
  background-color: #94bdfb;
  border-radius: 0.3rem;
  height: 2rem;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 0.9rem;
`;

export const CategoryButton = styled.button`
  background-color: ${({ props, id }) => (props[id] ? '#94BDFB' : '#FFFDF6')};
  font-weight: ${({ props, id }) => (props[id] ? 700 : 'normal')};
  border: solid 1px #fffdf6;
  border-radius: 0.3rem;
  height: 2rem;
  margin-top: 0.5rem;
  font-size: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 100%;
    font-size: 0.7rem;
  }

  @media (min-width: 992px) {
    width: 100%;
    font-size: 0.7rem;
  }
`;
