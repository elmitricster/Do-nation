import React from 'react';

export function AuthContainer() {
  const code = new URL(window.location.href).searchParams.get('code');
  return <div>{code}</div>;
}
