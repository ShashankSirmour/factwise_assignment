import React, { useEffect } from 'react';
import { ProfilesTemplate } from '@components/templates';
import { useDispatch, useSelector } from 'react-redux';
import { initFetchProfileData } from '@store/profile';
import { RootState } from '@store/rootReducer';

const ProfilesContainer = (): React.ReactElement => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (store: RootState) => store.profile,
  );
  useEffect(() => {
    dispatch(initFetchProfileData());
  }, []);

  return (
    <ProfilesTemplate
      data={data.filter(
        (d: { fullName: string }) => d.fullName?.includes('') || true,
      )}
    />
  );
};

export default ProfilesContainer;
