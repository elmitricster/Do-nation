import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import * as S from './Style';

export function DateSearch() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function range(start, end) {
    var arr = [];
    var length = end - start; 
    for (var i = 0; i <= length; i++) { 
      
      arr[i] = start;
      start++;
    }
    return arr;
  }
  const years = range(1990, new Date().getFullYear());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return(
    <div className='row' style={{ marginTop : "3rem" }}>
      <S.DateBox xs={{ span: 3, offset: 2 }} id="start-date">
        <S.DateText>시작일자</S.DateText>
        <S.MyDatePicker
          closeOnScroll={true}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
              </button>
            </div>
          )}
          selected={startDate}
          onChange={(date) => {
            date.setHours(0)
            date.setMinutes(0)
            date.setSeconds(0)
            setStartDate(date)
          }}
          dateFormat="yyyy/MM/dd"
        />
      </S.DateBox>
      <S.DateBox xs={3} id="end-date">
        <S.DateText>종료일자</S.DateText>
        <S.MyDatePicker
          closeOnScroll={true}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
              </button>
            </div>
          )}
          selected={endDate}
          onChange={(date) => {
            date.setHours(0)
            date.setMinutes(0)
            date.setSeconds(0)
            setEndDate(date)
          }}
          dateFormat="yyyy/MM/dd"
        />
      </S.DateBox>
      <Col xs={2} style={{ marginTop: "auto" }}>
        <S.MyButton>검색</S.MyButton>
      </Col>
    </div>
  )
}