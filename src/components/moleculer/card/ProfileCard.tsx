/* eslint-disable no-restricted-globals */
import React, { useCallback, useState } from 'react';
import { Avatar, ButtonBase, Grid } from '@mui/material';
import {
  DeleteConfirmationModel,
  EditableNumberField,
  EditableSelectField,
  EditableTextField,
  ProfilesAccordion,
  ProfilesAccordionDetails,
  ProfilesAccordionSummary,
} from '@components/atomic';

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  DeleteOutline,
  EditOutlined,
  ExpandMoreRounded,
} from '@mui/icons-material';
import { ProfileType } from '@type/profile';
import { useForm, useFormState } from 'react-hook-form';
import { deleteProfileData, updateProfileData } from '@store/profile';
import { useDispatch } from 'react-redux';

const sx = {
  outlinedInput: {
    p: 0,
    '& .MuiOutlinedInput-input': { px: 1, py: 1 },
  },
  headerFont: { fontSize: '1.5rem', fontWeight: '400' },
  titleText: {
    color: 'rgba(0, 0, 0, 0.55)',
  },
  accordionSummary: { backgroundColor: '#fff', borderRadius: 5 },
};

type ProfileCardPropsType = {
  data: ProfileType;
  expanded: boolean;
  handleChange: () => void;
  editMode: boolean;
  handleEditMode: (b: boolean) => void;
};

const genderOptions = [
  'Male',
  'Female',
  'Transgender',
  'Rather not say',
  'Other',
];
const ProfileCard: React.FC<ProfileCardPropsType> = ({
  data,
  expanded,
  editMode,
  handleChange,
  handleEditMode,
}) => {
  const dispatch = useDispatch();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: data.fullName,
      description: data.description,
      age: data.age,
      country: data.country,
      gender: data.gender.toLowerCase(),
    },
  });

  const { isDirty } = useFormState({ control });

  const onSubmit = (d: object) => {
    dispatch(updateProfileData({ ...data, ...d }));
    handleEditMode(false);
  };

  const handleDelete = useCallback(() => {
    dispatch(deleteProfileData(data.id));
  }, [data.id]);

  return (
    <ProfilesAccordion expanded={expanded} onChange={handleChange}>
      <ProfilesAccordionSummary
        expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
        style={sx.accordionSummary}
      >
        <Grid spacing={1} container wrap="nowrap" alignItems="center">
          <Grid item>
            <Avatar
              sx={{ border: '1px solid rgba(0,0,0,0.2)' }}
              src={data.picture}
              alt="img"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <EditableTextField
              fontStyle={sx.headerFont}
              editMode={editMode}
              error={errors.fullName && true}
              value={data.fullName}
              inputProps={{
                ...register('fullName', {
                  required: 'name required',
                }),
              }}
            />
          </Grid>
        </Grid>
      </ProfilesAccordionSummary>
      <ProfilesAccordionDetails>
        <Grid container direction="column" spacing={1}>
          <Grid
            item
            spacing={1}
            container
            wrap="nowrap"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs>
              <EditableNumberField
                suffix=" Years"
                name="age"
                editMode={editMode}
                control={control}
                title="Age"
                rules={{
                  require: true,
                  validate: (d: any) => !isNaN(d),
                }}
                error={errors.age && true}
                value={data.age}
              />
            </Grid>
            <Grid item xs>
              <EditableSelectField
                editMode={editMode}
                options={genderOptions}
                title="Gender"
                error={errors.gender && true}
                value={data.gender}
                inputProps={{
                  ...register('gender', { required: true }),
                }}
              />
            </Grid>
            <Grid item xs>
              <EditableTextField
                editMode={editMode}
                title="Country"
                value={data.country}
                error={errors.country && true}
                inputProps={{
                  ...register('country', {
                    required: true,
                    validate: (d: any) => isNaN(d),
                  }),
                }}
              />
            </Grid>
          </Grid>
          <Grid item>
            <EditableTextField
              editMode={editMode}
              title="Discription"
              multiline
              error={errors.description && true}
              value={data.description}
              inputProps={{
                ...register('description', {
                  required: true,
                }),
              }}
            />
          </Grid>

          {!editMode && (
            <Grid item container justifyContent="flex-end">
              <ButtonBase
                sx={{ borderRadius: '1000px', p: 0.5 }}
                onClick={() => setOpenDeleteModal(true)}
              >
                <DeleteOutline sx={{ color: 'red' }} />
              </ButtonBase>
              <DeleteConfirmationModel
                open={openDeleteModal}
                handleDelete={handleDelete}
                handleClose={() => setOpenDeleteModal(false)}
              />
              <ButtonBase
                sx={{ borderRadius: '1000px', p: 0.5 }}
                onClick={() => handleEditMode(true)}
              >
                <EditOutlined sx={{ color: 'blue' }} />
              </ButtonBase>
            </Grid>
          )}
          {editMode && (
            <Grid item container justifyContent="flex-end">
              <ButtonBase
                sx={{ borderRadius: '1000px', p: 0.5 }}
                onClick={() => {
                  handleEditMode(false);
                  reset();
                }}
              >
                <CancelOutlinedIcon sx={{ color: 'red' }} />
              </ButtonBase>
              <ButtonBase
                sx={{ borderRadius: '1000px', p: 0.5 }}
                onClick={handleSubmit(onSubmit)}
                disabled={!isDirty}
              >
                <CheckCircleOutlineOutlinedIcon
                  sx={{ color: isDirty ? 'green' : '#cfcdcc' }}
                />
              </ButtonBase>
            </Grid>
          )}
        </Grid>
      </ProfilesAccordionDetails>
    </ProfilesAccordion>
  );
};

ProfileCard.defaultProps = {
  editMode: false,
  handleEditMode: () => {},
};

export default ProfileCard;
