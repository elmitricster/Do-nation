import styled from 'styled-components';
import { Image } from 'react-bootstrap';

export const TopBox = styled.div`
  position: absolute;
  top: -3rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Contents = styled.div`
  position: relative;
  width: 80%;
  margin: 4.5rem auto;
  font-size: 0.8rem;
  border: solid 1px black;
  border-radius: 0.3rem;

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

export const SmallProfileImg = styled(Image)`
  width: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const NicknameBox = styled.div`
  text-align: start;
  line-height: 4rem;
  height: 4rem;
`;

export const ContentBox = styled.div`
  height: fluid;
  border-bottom: solid 1px black;
  font-size: 0.9rem;
  padding: 1rem;
  text-align: start;
`;

export const ImageBox = styled(Image)`
  width: 100%;
  border-bottom: solid 1px black;
`;

export const BottomBox = styled.div`
  text-align: start;
  line-height: 2rem;
  height: 2rem;
`;

export const Icon = styled(Image)`
  width: 1rem;
  margin-left: 1rem;
`;

export const DotsIcon = styled(Image)`
  position: absolute;
  width: 2rem;
  right: 1rem;
  top: 0.7rem;
`;

export const CommentsBox = styled.div`
  position: relative;
  height: 5rem;
  text-align: start;
`;

export const CommentProfile = styled(Image)`
  width: 1.5rem;
  margin-left: 1rem;
  margin-right: 0.5rem;
`;

export const CommentIcon = styled(Image)`
  position: absolute;
  width: 1rem;
  top: 0.3rem;
`;

export const CommentContent = styled.div`
  font-size: 0.8rem;
  text-align: start;
  margin-top: 0.5rem;
  margin-left: 3.1rem;
  margin-right: 3.1rem;
`;

export const CommentCreateBox = styled.div`
  height: 5rem;
`;

export const CommentInput = styled.input`
  margin: 0.5rem;
  border: solid 1px black;
  border-radius: 0.3rem;
  height: 4rem;
  width: 70%;

  @media (min-width: 768px) {
    width: 80%;
  }

  &:focus {
    border: solid 1px #94bdfb;
    outline: solid 1px #94bdfb;
  }
`;

export const CommentButton = styled.button`
  border: solid 1px black;
  border-radius: 0.3rem;
  height: 2rem;
  font-size: 0.9rem;
  width: 20%;

  @media (min-width: 768px) {
    width: 10%;
  }
`;

export const CreateText = styled.div`
  width: 80%;
  text-align: start;
  margin: 0.5rem auto;
  font-weight: bold;
  margin-top: 2rem;
`;

export const ContentInput = styled.textarea`
  resize: none;
  font-size: 0.8rem;
  margin: 0.5rem auto;
  border: solid 1px black;
  border-radius: 0.3rem;
  height: 20rem;
  padding: 0.5rem;
  width: 80%;

  &:focus {
    border: solid 1px #94bdfb;
    outline: solid 1px #94bdfb;
  }
`;

export const ContentImg = styled(Image)`
  width: 80%;
`;

export const MyButton = styled.button`
  border: solid 1px #94bdfb;
  background-color: #94bdfb;
  border-radius: 0.3rem;
  height: 2rem;
  margin-top: 3rem;
  font-size: 0.7rem;
  width: 8rem;
`;
