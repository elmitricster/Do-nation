import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const MainTextBox = styled.div`
  margin-top: 5rem;
  width: 15.5rem;
`

export const MainText = styled.div`
  text-align: start;
  font-size: 1.8rem;
  font-weight: bold;
`

export const MainTextBox2 = styled.div`
  margin-top: 5rem;
  width: 80%;
  font-size: 0.8rem;

  @media ( min-width: 768px ) {
    width: 50%;
    font-size: 1rem;
  }

  @media ( min-width: 992px ) {
    width: 30%;
    font-size: 1rem;
  }
`

export const MainText2 = styled.div`
  text-align: start;
  font-size: 1.8rem;
`

export const PointValue = styled.div`
  text-align: start;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const PointName = styled.span`
  text-align: center;
  font-size: 1.3rem;
  font-weight: normal;
`

export const MainText3 = styled.div`
  text-align: end;
  font-size: 1.8rem;
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
    width: 30%;
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

export const ContentText2 = styled.div`
  text-align: start;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const ContentText3 = styled.div`
  text-align: start;
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  margin: 0.5rem;
  border: solid 1px black;
  border-radius: 0.3rem;
  height: 2rem;

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