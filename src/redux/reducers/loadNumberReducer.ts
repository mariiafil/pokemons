import { AnyAction } from 'redux';
import { type } from '../actions';

const loadNumberState: LoadNumberState = {
  loadNumber: 12,
};

export const loadNumberReducer = (
  state = loadNumberState, action: AnyAction,
): LoadNumberState => {
  switch (action.type) {
    case type.SET_LOAD_NUMBER:
      return {
        loadNumber: state.loadNumber + 12,
      };

    default:
      return state;
  }
};
