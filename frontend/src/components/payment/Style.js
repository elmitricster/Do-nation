import styled from 'styled-components'

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
  padding: 8px;
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

export const ListBox = styled.div`
  width: 80%;
  margin: 4.5rem auto;
  font-size: 0.8rem;

  @media ( min-width: 768px ) {
    width: 65%;
    margin: 7rem auto;
    font-size: 1rem;
  }

  @media ( min-width: 992px ) {
    width: 65%;
    margin: 7rem auto;
    font-size: 1rem;
  }
`

export const BackButton = styled.button`
  border: solid 1px #94BDFB;
  background-color: #94BDFB;
  border-radius: 0.3rem;
  height: 2rem;
  margin-top: 2rem;
  font-size: 0.8rem;
  width: 25%;
`

export const PaymentListBox = styled.div`
  height: 30rem;
  overflow-y: auto;
  overflow-x: hidden;
`