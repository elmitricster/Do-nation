import { useState } from "react";
import * as S from "./Style";
import { Row, Col } from "react-bootstrap";

export function AccountAuth() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bank, setBank] = useState('');
  const [accountNum, setAccountNum] = useState('');

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  };

  const onBirthdayHandler = (event) => {
    setBirthday(event.currentTarget.value)
  };

  const onBankHandler = (e) => {
    setBank(e.currentTarget.value)
  }

  const onAccountNumHandler = (e) => {
    setAccountNum(e.currentTarget.value)
  }

  const onSubmit = () => {
    const data = {
      
    };
  };

  const handleKeyPress = e => {
    if(e.key === 'Enter') {
      onSubmit();
    }
  }

  return(
    <div className="row justify-content-center">
      <S.MainTextBox>
        <S.MainText>정산 받을 계좌를</S.MainText>
        <S.MainText>입력해주세요</S.MainText>
      </S.MainTextBox>

      <Row>
        <S.Contents onKeyPress={handleKeyPress}>
          <Col style={{marginBottom: "1rem"}}>
            <S.ContentText>이름</S.ContentText>
            <S.Input
              type="name"
              style={{width: "100%", margin: "auto"}}
              value={name}
              onChange={onNameHandler}
            />
          </Col>
          <Col style={{marginBottom: "1rem"}}>
            <S.ContentText>생년월일</S.ContentText>
            <S.Input
              type="birthday"
              style={{width: "100%", margin: "auto"}}
              value={birthday}
              onChange={onBirthdayHandler}
            />
          </Col>
          <Col style={{marginBottom: "1rem"}}>
            <S.ContentText>은행</S.ContentText>
            <S.Input
              type="bank"
              style={{width: "100%", margin: "auto"}}
              value={bank}
              onChange={onBankHandler}
            />
          </Col>
          <Col style={{marginBottom: "1rem"}}>
            <S.ContentText>계좌번호</S.ContentText>
            <S.Input
              type="accountNum"
              style={{width: "100%", margin: "auto"}}
              value={accountNum}
              onChange={onAccountNumHandler}
            />
          </Col>
          <Col style={{marginBottom: "1rem"}}>
            <S.MyButton
              style={{width: "100%", marginBottom: "1rem"}}
              onClick={onSubmit}
            >
              인증하기
            </S.MyButton>
          </Col>
        </S.Contents>
      </Row>
    </div>
  )
}