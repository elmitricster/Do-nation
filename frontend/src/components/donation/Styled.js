import styled from 'styled-components';

const ownDiv = styled.div`
  float: right;
`;

const posPtag = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const ownPtag = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const ownSpan = styled.span`
  font-weight: bold;
`;

const ownGom = styled.span`
  margin-left: 0.5rem;
`;

const nick = styled.div`
  margin-top: 0.5rem;
  font-size: 2rem;
  text-align: center;
`;

const donaText = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const donaBtn = styled.button`
  background-color: #94bdfb; /* Green */
  border: none;
  color: white;
  padding: 1rem 6rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin: auto;
  margin-top: 2rem;
  display: block;
  border-radius: 15px;
`;

const box = styled.div`
  text-align: center;
  position: relative;
`;

const nicks = styled.div`
  display: inline-block;
  font-size: 2rem;
  margin-left: 2rem;
`;

const boxes = styled.div`
  display: flexbox;
  align-items: center;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const tBox = styled.div`
  margin-top: 2rem;
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

export const Input = styled.input`
  margin: 0.5rem auto;
  border: solid 1px black;
  border-radius: 0.3rem;
  height: 2.5rem;
  font-size: 0.8rem;
  width: 75%;
  padding-left: 3rem;

  &:focus {
    border: solid 1px #94BDFB;
    outline: solid 1px #94BDFB;
  }
`

export const GomIcon = styled.img`
  position: absolute;
  left: 3.7rem;
  top: 0.7rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`

export const GomText = styled.div`
  position: absolute;
  right: 3.7rem;
  top: 0.9rem;
  font-size: 1rem;
  font-weight: bold;
`

export {
  ownDiv,
  posPtag,
  ownPtag,
  ownSpan,
  ownGom,
  nick,
  donaText,
  donaBtn,
  box,
  nicks,
  boxes,
  tBox,
};
