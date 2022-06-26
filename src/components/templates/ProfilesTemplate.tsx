import { Container, SearchBar } from '@components/atomic';
import ProfileCard from '@components/moleculer/card/ProfileCard';

import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { ProfileType } from '@type/profile';
import { Fragment, useCallback, useState } from 'react';

type ProfileTemplateProps = {
  data: [ProfileType];
};

export default function ProfileTemplate({ data }: ProfileTemplateProps) {
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (n: number) => () => {
    let open: null | number = n;
    if (openIndex === n) {
      open = null;
    }
    if (!editMode) setOpenIndex(open);
  };

  const handleEditMode = useCallback(
    (state: boolean) => {
      if (openIndex) setEditMode(state);
    },
    [openIndex, setEditMode],
  );

  return (
    <Container>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <SearchBar />
        <Box sx={{ marginTop: 5 }} />
        {data.map((d: ProfileType) => (
          <Fragment key={d.id}>
            <ProfileCard
              data={d}
              editMode={d.id === openIndex && editMode}
              expanded={d.id === openIndex}
              handleChange={handleChange(d.id)}
              handleEditMode={handleEditMode}
            />
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
}
