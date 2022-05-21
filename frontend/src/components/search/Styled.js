import styled from 'styled-components';

const boxContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const userBox = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

const avatarBox = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const contentBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
`;

const nameBox = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const categoryBox = styled.div``;

const description = styled.div`
  margin-top: 1rem;
`;

const creator = styled.div`
  margin-top: 0.3rem;
  margin-right: 0.5rem;
  display: inline-block;
  width: 8rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 0.5rem;
  background: #e32222;
  text-align: center;
`;

const subject = styled.div`
  margin-top: 0.3rem;
  display: inline-block;
  width: 10rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 0.5rem;
  background: #8ac4ff;
  text-align: center;
`;
export {
  boxContainer,
  userBox,
  avatarBox,
  contentBox,
  nameBox,
  categoryBox,
  description,
  creator,
  subject,
};
