import { LoginState } from 'modules/auth/state';
import client from 'modules/client';

/*
  POST /api/auth/login
  {
    userId: 'abcd'
    password: '1234'
  }
*/
export const login = async ({ userId, password }: LoginState) => {
  return;
  const { data } = await client.post('/api/auth/login', {
    userId,
    password,
  });
  return data;
};

/*
  GET /api/auth/check
  세션 만료에 대한 체크
*/
export const check = async () => {
  await client.get('/api/auth/check');
};

/*
  POST /api/auth/logout
*/
export const logout = async () => {
  await client.post('/api/auth/logout');
};
