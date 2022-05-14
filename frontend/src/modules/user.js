import { createAction, handleActions } from 'redux-actions';

const CHECK_USER = 'user/CHECK_USER';

export const checkUser = createAction(CHECK_USER, userNickname => userNickname);

const initialState = {
  user: null,
};

export default handleActions(
  {
    [CHECK_USER]: (state, { payload: userNickname }) => ({
      ...state,
      user: userNickname,
    }),
  },
  initialState,
);
