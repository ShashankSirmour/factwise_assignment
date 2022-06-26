import { TitlePage } from '@components/atomic';
import { ProfilesContainer } from '@container/profiles';
import React, { FC, ReactElement, useEffect } from 'react';

type ProfilesProps = {
  message: string;
};

const Profiles: FC<ProfilesProps> = ({
  message,
}: ProfilesProps): ReactElement => (
  <TitlePage title="Profils">
    <ProfilesContainer />
  </TitlePage>
);

export default Profiles;
