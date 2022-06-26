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
  ({ title = '', editMode, options, value, inputProps, ...rest }, ref) => (
    <Stack direction="column" spacing={0.5} width="100%">
      {title && <Typography sx={sx.titleText}>{title}</Typography>}
      {editMode && (
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          defaultValue={value}
          // onChange={handleChange}
          input={<OutlinedInput sx={sx.outlinedInput} />}
          // MenuProps={MenuProps}
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
      {!editMode && <Typography>{value}</Typography>}
    </Stack>
  ),
);

EditableSelectField.defaultProps = {
  title: 'Application',
  editMode: false,
  value: null,
  options: [],
  inputProps: {},
};

export default EditableSelectField;
