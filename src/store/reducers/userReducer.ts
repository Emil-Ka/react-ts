import {UserActionType, UserState, ActionType} from '../types/user';

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: ActionType): UserState => {
  switch (action.type) {
    case UserActionType.FETCH_USER:
      return {
        ...state,
        loading: true,
      };
    case UserActionType.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    case UserActionType.FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}