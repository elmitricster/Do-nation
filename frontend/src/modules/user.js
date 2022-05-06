import { createAction, handleActions } from 'redux-actions';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리

export const tempSetUser = createAction(TEMP_SET_USER, user => user);

const initialState = {
  user: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
  },
  initialState,
);
