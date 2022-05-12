import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const GET_USER_INFO = 'user/GET_USER_INFO';

export const getUserInfo = createAction(GET_USER_INFO, user => user);

const initialState = {
  birthdaty: null,
  category: null,
  certified: false,
  id: null,
  introMessage: null,
  kakaoId: null,
  nickname: null,
  platformType: null,
  point: null,
  profileImage: null,
  profileName: null,
  subject: null,
  userUrls: null,
};

export default handleActions(
  {
    [GET_USER_INFO]: (state, { payload: { key, value } }) =>
      produce(state, draft => {
        draft[key] = value; // 예: state.birthday를 바꾼다
      }),
  },
  initialState,
);
