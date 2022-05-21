import styled from 'styled-components'
import { Col } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const DateBox = styled(Col)`
`;

export const DateText = styled.div`
  text-align: start;
  font-size: 0.8rem;
`;

export const MyDatePicker = styled(ReactDatePicker)`
  width: 100%;
  font-size: 0.5rem;
  height: 2rem;
  padding: 0.5rem;

  @media ( min-width: 768px ) {
    height: 2.5rem;
    font-size: 0.9rem;
    padding: 0.5rem;
  }

  @media ( min-width: 992px ) {
    height: 2.5rem;
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`;

export const MyButton = styled.button`
  width: 100%;
  border: solid 1px #3687FF;
  background-color: #3687FF;
  border-radius: 0.3rem;
  height: 2.5rem;
  font-weight: bold;
  color: white;
  font-size: 0.8rem;

  @media ( min-width: 768px ) {
    font-size: 1rem;
  }

  @media ( min-width: 992px ) {
    font-size: 1rem;
  }
`;