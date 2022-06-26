import React, { forwardRef } from 'react';
import {
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from '@mui/material';

type EditableSelectFieldType = {
  title: string;
  editMode: boolean;
  value: any;
  options: string[];
  inputProps?: object;
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

const EditableSelectField = forwardRef<HTMLDivElement, EditableSelectFieldType>(
  (
    { title = '', editMode, options, value, inputProps, error, ...rest },
    ref,
  ) => (
    <Stack direction="column" spacing={0.5} width="100%">
      {title && <Typography sx={sx.titleText}>{title}</Typography>}
      {editMode && (
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          defaultValue={value}
          error={error}
          input={<OutlinedInput sx={sx.outlinedInput} />}
          {...inputProps}
        >
          {options.map((name: string) => (
            <MenuItem
              key={name}
              value={name.toLowerCase()}
              // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      )}
      {!editMode && (
        <Typography>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Typography>
      )}
    </Stack>
  ),
);

EditableSelectField.defaultProps = {
  title: 'Application',
  editMode: false,
  value: null,
  options: [],
  inputProps: {},
  error: false,
};

export default EditableSelectField;
