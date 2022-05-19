import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import * as S from './Style';
import { apiInstance } from 'api';

export function Withdraw() {
  const [name, setName] = useState('');
  const [pointValue, setPointValue] = useState(0);
  const [withdrawValue, setWithdrawValue] = useState();
  const api = apiInstance();
  const navigate = useNavigate();

  useEffect(() => {
    const getPoint = async () => {
      const response = await api.get('/user/me')
      return response.data
    }

    getPoint()
      .then(res => {
        setName(res.nickname)
        setPointValue(res.point)
      })
  }, [])

  const onWithdrawValueHandler = (e) => {
    setWithdrawValue(e.currentTarget.value)
  }

  const onSubmit = () => {
    const requestWithdraw = async () => {
      const response = await api.post(`/withdraw?point=${parseInt(withdrawValue)}`)
      return response
    }

    if (parseInt(withdrawValue) >= 10000) {
      requestWithdraw()
        .then(res => {
          console.log(res)
          navigate(0);
        })
    } else {
      alert('최소 10,000 Gom 이상부터 출금할 수 있습니다.')
    }
  };

  return(
    <div className='row justify-content-center'>
      <Row className="justify-content-center">
        <S.MainTextBox2>
          <Col>
          <S.MainText2>{name}님의</S.MainText2>
          <S.MainText2>현재 출금가능한</S.MainText2>
          <S.MainText2>곰은</S.MainText2>
          </Col>

          <S.PointValue style={{ textAlign: 'center', fontSize: '2.5rem' }}>
            {pointValue.toLocaleString()}
            <S.PointName>Gom</S.PointName>
          </S.PointValue>

          <S.MainText3>입니다.</S.MainText3>
        </S.MainTextBox2>
      </Row>
      
      <Row>
        <S.Contents>
          <Col style={{marginBottom: "1rem"}}>
            <S.ContentText2>정산 받을 Gom</S.ContentText2>
            <S.Input
              type="withdrawValue"
              style={{width: "100%", margin: "auto"}}
              value={withdrawValue}
              onChange={onWithdrawValueHandler}
            />
            <S.ContentText3>최소 10,000 Gom 이상부터 출금할 수 있습니다.</S.ContentText3>
          </Col>
          <Col>
            <S.MyButton
              style={{width: "100%", marginTop: "1rem"}}
              onClick={onSubmit}
            >
              정산하기
            </S.MyButton>
          </Col>
          <Col style={{marginBottom: "1rem"}}>
            <NavLink to="details">
              <S.MyButton
                style={{width: "100%", marginTop: "1rem"}}
              >
                정산 내역 확인
              </S.MyButton>
            </NavLink>
          </Col>
        </S.Contents>
      </Row>
    </div>
  )
}