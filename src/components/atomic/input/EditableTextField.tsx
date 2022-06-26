import React, { forwardRef } from 'react';
import { OutlinedInput, Stack, Typography } from '@mui/material';

type EditableTextFieldType = {
  title?: string | null;
  multiline?: boolean;
  minRows?: number;
  editMode: boolean;
  fontStyle?: object | null;
  inputProps?: object;
  value: string;
  error?: boolean;
};

const sx = {
  outlinedInput: {
    p: 0,
    '& .MuiOutlinedInput-input': { px: 1, py: 1 },
  },
  titleText: {
    color: 'rgba(0, 0, 0, 0.55)',
  },
};

const EditableTextField = forwardRef<HTMLDivElement, EditableTextFieldType>(
  (
    {
      title = '',
      editMode,
      multiline,
      minRows,
      fontStyle,
      inputProps,
      value,
      error,
      ...rest
    },
    ref,
  ) => (
    <Stack direction="column" width="100%">
      {title && <Typography sx={sx.titleText}>{title}</Typography>}
      {editMode && (
        <OutlinedInput
          error={error}
          onClick={(e) => e.stopPropagation()}
          multiline={multiline}
          defaultValue={value}
          minRows={minRows}
          sx={{ ...sx.outlinedInput, ...(fontStyle && { ...fontStyle }) }}
          {...inputProps}
        />
      )}
      {!editMode && (
        <Typography sx={fontStyle && { ...fontStyle }} {...rest}>
          {value}
        </Typography>
      )}
    </Stack>
  ),
);

EditableTextField.defaultProps = {
  title: null,
  multiline: false,
  minRows: 3,
  editMode: false,
  fontStyle: null,
  inputProps: {},
  value: '',
  error: false,
};

export default EditableTextField;
