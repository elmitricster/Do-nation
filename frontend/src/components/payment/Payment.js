import { useState } from "react"
import { Row, Col } from "react-bootstrap";
import * as S from "./Style"
import { Modal } from "@mui/material"
import PaymentModal from "./paymentModal/PaymentModal"

export function Payment() {
  const [name, setName] = useState('박한빈');
  const [pointValue, setPointValue] = useState(5000);
  
  const onSubmit = () => {
    const data = {
      
    };
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true)


  return(
    <div className="row justify-content-center">

      <Row className="justify-content-center">
        <S.MainTextBox2>
          <S.MainText2>{name} 님의</S.MainText2>
          <S.MainText2>현재 사용가능한</S.MainText2>
          <S.MainText2>곰은</S.MainText2>

          <S.PointValue style={{textAlign: 'center', fontSize: '2.5rem'}}>
            {pointValue.toLocaleString()}
            <S.PointName>Gom</S.PointName>
          </S.PointValue>

          <S.MainText2 style={{textAlign: 'end'}}>입니다.</S.MainText2>
        </S.MainTextBox2>
      </Row>

      <Row>

        <S.Contents>
          <Col>
            <S.MyButton
              style={{width: "100%", marginTop: "1rem"}}
              onClick={handleOpen}
            >
              충전하기
            </S.MyButton>
          </Col>
          <Col>
            <S.MyButton 
              style={{width: "100%", marginTop: "1rem"}}
              onClick={onSubmit}
            >
              충전내역 확인
            </S.MyButton>
          </Col>
        </S.Contents>
      </Row>

      <Modal open={open}>
        <PaymentModal />
      </Modal>


    </div>
  )
}