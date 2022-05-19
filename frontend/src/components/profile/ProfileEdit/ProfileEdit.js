import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { CreateButton } from './CreateButton';
import { SubjectButton } from './SubjectButton';
import profileDafult from './default_profile.png';
import * as S from './Style';
import { apiInstance } from 'api';

export function ProfileEdit() {
  const [previewImg, setPreviewImg] = useState();
  const [profileImg, setProfileImg] = useState(profileDafult);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [urlName, setUrlName] = useState('이름');
  const [url, setUrl] = useState('');
  const [urlBtns, setUrlBtns] = useState([]);
  const [create, setCreate] = useState('');
  const [subject, setSubject] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const dropDownRef = useRef(null);
  const api = apiInstance();
  const navigate = useNavigate();

  const createCategories = [
    {
      id: 0,
      cate: '방송BJ',
    },
    {
      id: 1,
      cate: '유튜버',
    },
    {
      id: 2,
      cate: '블로거',
    },
    {
      id: 3,
      cate: '작가',
    },
    {
      id: 4,
      cate: '개발자',
    },
    {
      id: 5,
      cate: '디자이너',
    },
    {
      id: 6,
      cate: '아티스트',
    },
    {
      id: 7,
      cate: '틱톡',
    },
  ];
  const [createCateActive, setCreateCateActive] = useState(
    Array(createCategories.length).fill(false),
  );

  const subjectCategories = [
    {
      id: 0,
      cate: '영화/만화',
    },
    {
      id: 1,
      cate: '자동차/교통',
    },
    {
      id: 2,
      cate: '음악',
    },
    {
      id: 3,
      cate: '동물',
    },
    {
      id: 4,
      cate: '스포츠',
    },
    {
      id: 5,
      cate: '여행',
    },
    {
      id: 6,
      cate: '게임',
    },
    {
      id: 7,
      cate: '인물/블로그',
    },
    {
      id: 8,
      cate: '코미디',
    },
    {
      id: 9,
      cate: '엔터테이먼트',
    },
    {
      id: 10,
      cate: '뉴스/정치',
    },
    {
      id: 11,
      cate: '노하우/스타일',
    },
    {
      id: 12,
      cate: '교육',
    },
    {
      id: 13,
      cate: '과학기술',
    },
    {
      id: 14,
      cate: '비영리/사회운동',
    },
  ];
  const [subjectCateActive, setSubjectCateActive] = useState(
    Array(subjectCategories.length).fill(false),
  );

  const urlNames = ['Youtube', 'Instagram'];

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await api.get('/user/me');
      const data = response.data;

      console.log(data);
      setSubject(data.subject);
      setContent(data.introMessage);
      setNickname(data.nickname);
      setCreate(data.category);
      setProfileImg(data.profileImage);
      setUrlBtns(data.userUrls);

      return response;
    };

    getUserInfo();
  }, []);

  useEffect(() => {
    if (create) {
      var create_active_index = 0;
      createCategories.map((createCate, index) => {
        if (createCate.cate === create) {
          create_active_index = index;
        }
      });

      const activeCheck = createCateActive.map((el, index) => {
        return index === create_active_index;
      });

      setCreateCateActive(activeCheck);
    }
  }, [create]);

  useEffect(() => {
    if (subject) {
      var subject_active_index = 0;
      subjectCategories.map((subjectCate, index) => {
        if (subjectCate.cate === subject) {
          subject_active_index = index;
        }
      });

      const activeCheck = subjectCateActive.map((el, index) => {
        return index === subject_active_index;
      });

      setSubjectCateActive(activeCheck);
    }
  }, [subject]);

  const createBtnActiveHandler = (id, activeLists, setActiveLists) => {
    setCreate(createCategories[id].cate);

    const activeCheck = activeLists.map((el, index) => {
      return index === id;
    });

    setActiveLists(activeCheck);
  };

  const subjectBtnActiveHandler = (id, activeLists, setActiveLists) => {
    setSubject(subjectCategories[id].cate);

    const activeCheck = activeLists.map((el, index) => {
      return index === id;
    });

    setActiveLists(activeCheck);
  };

  const onNicknameHandler = e => {
    setNickname(e.currentTarget.value);
  };

  const onContentHandler = e => {
    setContent(e.currentTarget.value);
  };

  const onUrlHandler = e => {
    setUrl(e.currentTarget.value);
  };

  const addUrlBtn = () => {
    setUrlBtns(urlBtns => [
      ...urlBtns,
      {
        urlName: urlName,
        userUrl: url,
      },
    ]);

    setUrlName('이름');
    setUrl('');
  };

  const deleteUrlBtn = index => {
    setUrlBtns([...urlBtns.slice(0, index), ...urlBtns.slice(index + 1)]);
  };

  function onLoad(e) {
    if (e.target.files[0].size > 1000000) {
      console.log('error');
    } else {
      setPreviewImg(e.target.files[0]);
      setProfileImg(URL.createObjectURL(e.target.files[0]));
    }
  }

  const onSubmit = () => {
    const data = {
      profileName: nickname,
      profileImage: profileImg,
      introMessage: content,
      userUrls: urlBtns,
      category: create,
      subject: subject,
      userNickname: nickname,
    };

    const updateUserInfo = async data => {
      const response = await api.put('/auth', data);
      return response;
    };

    updateUserInfo(data);
    navigate(`/profile/${nickname}/articles`)
  };

  return (
    <div>
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
          <S.ProfileImg src={profileImg ? profileImg : profileDafult} rounded />
        </label>
      </div>
      <Row>
        <S.Contents style={{ marginTop: '1.5rem' }}>
          <Col style={{ marginBottom: '1rem' }}>
            <S.ContentText>닉네임</S.ContentText>
            <S.Input
              type="nickname"
              style={{ width: '100%', margin: 'auto' }}
              value={nickname}
              onChange={onNicknameHandler}
            />
          </Col>

          <Col style={{ marginBottom: '1rem' }}>
            <S.ContentText>소개</S.ContentText>
            <S.Input
              type="content"
              style={{ width: '100%', height: '10rem', margin: 'auto' }}
              value={content}
              onChange={onContentHandler}
            />
          </Col>

          <Col style={{ marginBottom: '1rem' }}>
            <S.ContentText className="mb-0">사이트 URL</S.ContentText>
            <Row className="justify-content-between align-items-center">
              <div className="col-10">
                <S.LeftBox2
                  style={{
                    width: '30%',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {urlName}
                  <S.Menu ref={dropDownRef} isOpen={isOpen}>
                    {urlNames.map((urlName, index) => (
                      <S.MyLi key={index} onClick={() => setUrlName(urlName)}>
                        {urlName}
                      </S.MyLi>
                    ))}
                  </S.Menu>
                </S.LeftBox2>
                <S.RightInput
                  type="url"
                  style={{ width: '70%' }}
                  placeholder="url"
                  value={url}
                  onChange={onUrlHandler}
                />
              </div>
              <div className="col-2">
                <S.MyButton
                  style={{ width: '100%', margin: 'auto' }}
                  onClick={() => {
                    addUrlBtn();
                  }}
                >
                  +
                </S.MyButton>
              </div>
            </Row>
          </Col>

          <Col style={{ marginBottom: '1rem' }}>
            <Row className="justify-content-between align-items-center">
              {urlBtns.map((urlBtn, index) => (
                <>
                  <div className="col-10" key={urlBtn.btnName}>
                    <S.LeftBox style={{ width: '30%' }}>
                      {urlBtn.urlName}
                    </S.LeftBox>
                    <S.RightBox style={{ width: '70%' }}>
                      {urlBtn.userUrl}
                    </S.RightBox>
                  </div>
                  <div className="col-2">
                    <S.MyButton
                      style={{ width: '100%', margin: 'auto' }}
                      onClick={() => {
                        deleteUrlBtn(index);
                      }}
                    >
                      -
                    </S.MyButton>
                  </div>
                </>
              ))}
            </Row>
          </Col>

          <Col style={{ marginBottom: '1rem' }}>
            <S.ContentText>크리에이트 분야</S.ContentText>
            <Row>
              {createCategories.map(createCategory => (
                <CreateButton
                  key={createCategory.id}
                  cate={createCategory}
                  btnActiveHandler={createBtnActiveHandler}
                  cateActive={createCateActive}
                  setCateActive={setCreateCateActive}
                />
              ))}
            </Row>
          </Col>

          <Col style={{ marginBottom: '1rem' }}>
            <S.ContentText>주제</S.ContentText>
            <Row>
              {subjectCategories.map(subjectCategory => (
                <SubjectButton
                  key={subjectCategory.id}
                  cate={subjectCategory}
                  btnActiveHandler={subjectBtnActiveHandler}
                  cateActive={subjectCateActive}
                  setCateActive={setSubjectCateActive}
                />
              ))}
            </Row>
          </Col>

          <Col style={{ marginBottom: '1rem' }}>
            <S.MyButton
              style={{ width: '100%', marginBottom: '1rem' }}
              onClick={() => {
                onSubmit();
              }}
            >
              적용하기
            </S.MyButton>
          </Col>
        </S.Contents>
      </Row>
    </div>
  );
}
