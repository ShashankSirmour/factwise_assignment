import {
  DELETE_PROFILE_DATA,
  INIT_FETCH_PROFILE_DATA,
  SET_PROFILE_DATA_ERROR,
  SET_PROFILE_DATA_SUCCESS,
  UPDATE_PROFILE_DATA,
} from '@store/actionTypes';
import { ProfileType } from '@type/profile';

type InitialStateType = {
  data: ProfileType[];
  loading: boolean;
  error: any;
};

const initialState: InitialStateType = {
  data: [],
  loading: false,
  error: null,
};

type ActionType = {
  type?: string;
  payload?: any;
};
export default (state = initialState, action: ActionType = {}) => {
  switch (action.type) {
    case INIT_FETCH_PROFILE_DATA:
      return { ...state, loading: true };
    case SET_PROFILE_DATA_SUCCESS:
      return { ...state, data: action.payload || [], loading: false };
    case SET_PROFILE_DATA_ERROR:
      return { ...state, loading: false };

    case UPDATE_PROFILE_DATA:
      return {
        ...state,
        data: state.data.map((d) =>
          d.id === action.payload.id ? { ...action.payload } : d,
        ),
      };

    case DELETE_PROFILE_DATA:
      return {
        ...state,
        data: state.data.filter((d) => d.id !== action.payload),
      };
    default:
      return state;
  }
};
