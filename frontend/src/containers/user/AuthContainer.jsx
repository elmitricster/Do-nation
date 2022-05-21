import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiInstance } from 'api';
import { checkUser } from 'modules/user';

export function AuthContainer() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const api = apiInstance();
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  useEffect(() => {
    axios
      .get(`http://k6c101.p.ssafy.io:8080/auth/login?code=${code}`)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);

        api
          .get('/user/me', {
            headers: {
              jwtoken: res.data.token,
            },
          })
          .then(res => {
            dispatch(checkUser(res.data.nickname));
            localStorage.setItem('user', res.data.nickname);
          });
        navigate('/');
      })
      .catch(err => {
        console.log(err);
        navigate('/user/login');
      });
  });

  return <div></div>;
}
