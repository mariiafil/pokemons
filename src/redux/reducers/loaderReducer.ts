import { AnyAction } from 'redux';
import { type } from '../actions';

const loadState: LoadingState = {
  isLoading: false,
};

export const loaderReducer = (
  state = loadState, action: AnyAction,
): LoadingState => {
  switch (action.type) {
    case type.SET_IS_LOADING:
      return {
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
