import {
  DELETE_PROFILE_DATA,
  INIT_FETCH_PROFILE_DATA,
  SET_PROFILE_DATA_ERROR,
  SET_PROFILE_DATA_SUCCESS,
  UPDATE_PROFILE_DATA,
} from '@store/actionTypes';
import { ProfileType } from '@type/profile';

export const initFetchProfileData = () => ({
  type: INIT_FETCH_PROFILE_DATA,
});

export const setProfileDataSuccess = (data: [ProfileType]) => ({
  type: SET_PROFILE_DATA_SUCCESS,
  payload: data,
});

export const setProfileDataError = () => ({
  type: SET_PROFILE_DATA_ERROR,
});

export const updateProfileData = (data: ProfileType) => ({
  type: UPDATE_PROFILE_DATA,
  payload: data,
});

export const deleteProfileData = (id: number) => ({
  type: DELETE_PROFILE_DATA,
  payload: id,
});
