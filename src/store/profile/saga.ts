import { call, put, takeLatest } from 'redux-saga/effects';

import { getAllProfile } from '@services/profile';
import { INIT_FETCH_PROFILE_DATA } from '@store/actionTypes';
import { getAge } from '@utils/function';
import { ProfileType } from '@type/profile';
import { setProfileDataError, setProfileDataSuccess } from './actions';
// worker saga: makes the api call when watcher saga sees the action
function* profilesRequestWorker(): Generator<any> {
  try {
    const response: any = yield call(getAllProfile);
    // dispatch a success action to the store with logged in response
    const data = response.data.map((d: ProfileType) => ({
      ...d,
      age: getAge(d.dob) || null,
      fullName: `${d.first} ${d.last}`,
    }));
    yield put(setProfileDataSuccess(data));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(setProfileDataError());
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* profileWatcherSaga() {
  yield takeLatest(INIT_FETCH_PROFILE_DATA, profilesRequestWorker);
}
