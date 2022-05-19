import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImg from './defaultImage.jpg';
import * as S from './Style';
import { apiInstance } from 'api';

export function ArticleCreate() {
  const [error, setError] = useState(false);
  const [content, setContent] = useState();
  const [image, setImage] = useState('');
  const [fileImage, setFileImage] = useState(defaultImg);

  const navigate = useNavigate();
  const api = apiInstance();

  function onLoad(e) {
    if (e.target.files[0].size > 1000000) {
      setError(true);
    } else {
      setImage(e.target.files[0]);
      setFileImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  const onContentHandler = e => {
    setContent(e.currentTarget.value);
  };

  const onSubmit = () => {
    console.log(content)
    console.log(image)
    console.log(fileImage)
    const submit = async (content, image) => {
      const formData = new FormData();
      formData.append('images', image)

      const response = await api.post(`/community?content=${content}`, formData);

      return response
    }

    submit(content, image)
      .then(res => {
        console.log(res)
        navigate(-1)
      })
      .catch(e => {
        console.log(e)
      })
  };

  return (
    <div>
      <S.Contents style={{ border: 'none' }}>
        <S.TopBox>
          <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)} style={{ cursor: 'pointer'}}> 돌아가기</i>
        </S.TopBox>
        <S.CreateText>내용</S.CreateText>
        <S.ContentInput onChange={onContentHandler}></S.ContentInput>
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
        <S.MyButton onClick={onSubmit}>작성하기</S.MyButton>
      </S.Contents>
    </div>
  );
}
