import { useState } from 'react';
import defaultImg from './defaultImage.jpg';
import * as S from './Style';

export function ArticleCreate() {
  const [error, setError] = useState(false);
  const [image, setImage] = useState('');
  const [fileImage, setFileImage] = useState(defaultImg);

  function onLoad(e) {
    if (e.target.files[0].size > 1000000) {
      setError(true);
    } else {
      setImage(e.target.files[0]);
      setFileImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div>
      <S.Contents style={{ border: 'none' }}>
        <S.TopBox>
          <i className="fa-solid fa-arrow-left"> 돌아가기</i>
        </S.TopBox>
        <S.CreateText>내용</S.CreateText>
        <S.ContentInput></S.ContentInput>
        <S.CreateText>사진</S.CreateText>
        <div>
          <input
            id="imgInput"
            className="image"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={onLoad}
          ></input>

          <label style={{ cursor: 'pointer' }} name="ImgBtn" htmlFor="imgInput">
            <S.ContentImg src={fileImage} />
          </label>
        </div>
        <S.MyButton>작성하기</S.MyButton>
      </S.Contents>
    </div>
  );
}
