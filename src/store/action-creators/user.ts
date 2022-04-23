import axios from 'axios';
import {AnyAction, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {UserActionType} from "../types/user"
import {ActionType} from "../types/user";

export const fetchUser: () => (dispatch: Dispatch<ActionType>) => Promise<void> = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({
        type: UserActionType.FETCH_USER
      });

      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({
        type: UserActionType.FETCH_USER_SUCCESS,
        payload: response.data
      })

    } catch (err) {
      dispatch({
        type: UserActionType.FETCH_USER_ERROR,
        payload: 'Произошла ошибка'
      });
    }
  }
}

const fetchUserError = (): ActionType => {
  return {
    type: UserActionType.FETCH_USER_ERROR,
    payload: ''
  }
}