import { AnyAction } from 'redux';
import { type } from '../actions';

const idState: IdState = {
  id: null,
};

export const idReducer = (
  state = idState, action: AnyAction,
): IdState => {
  switch (action.type) {
    case type.SET_ID:
      return {
        id: action.id,
      };

    default:
      return state;
  }
};
