import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function AuthContainer() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  useEffect(() => {
    axios
      .get(`http://k6c101.p.ssafy.io:8080/auth/login?code=${code}`)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
        navigate('/user/login');
      });
  });

  return <div></div>;
}
