import { createAction, handleActions } from 'redux-actions';

const SET_START_DATE = 'withdraw/SET_START_DATE';
const SET_END_DATE = 'withdraw/SET_END_DATE';
const SET_IS_SEARCHED = 'withdraw/SET_IS_SEARCHED';

export const setStartDate = createAction(SET_START_DATE, date => date);
export const setEndDate = createAction(SET_END_DATE, date => date);
export const setIsSearched = createAction(SET_IS_SEARCHED, boolean => boolean);

const initialState = {
  startDate: new Date(),
  endDate: new Date(),
  isSearched: false,
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
    [SET_IS_SEARCHED]: (state, { payload: boolean }) =>({
      ...state,
      isSearched: boolean,
    })
  },
  initialState,
);
