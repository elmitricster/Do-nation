import { createAction, handleActions } from 'redux-actions';

const SET_START_DATE = 'user/SET_START_DATE';
const SET_END_DATE = 'user/SET_END_DATE';

export const setStartDate = createAction(SET_START_DATE, date => date);
export const setEndDate = createAction(SET_END_DATE, date => date)

const initialState = {
  startDate: null,
  endDate: null,
};

export default handleActions(
  {
    [SET_START_DATE]: (state, { payload: date }) => ({
      ...state,
      startDate: date,
    }),
    [SET_END_DATE]: (state, { payload: date }) =>({
      ...state,
      endDate: date,
    }),
  },
  initialState,
);
