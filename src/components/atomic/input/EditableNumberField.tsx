import React, { forwardRef } from 'react';
import { OutlinedInput, Stack, Typography } from '@mui/material';
import NumberFormat from 'react-number-format';
import { Controller } from 'react-hook-form';

type EditableNumberFieldType = {
  title?: string | null;
  editMode: boolean;
  fontStyle?: object | null;
  suffix?: string;
  value: string | number;
  name: string;
  control?: any;
  error?: boolean;
  rules?: any;
};

const sx = {
  outlinedInput: {
    p: 0,
    '& .MuiOutlinedInput-input': { px: 1, py: 1 },
  },
  titleText: {
    color: 'rgba(0, 0, 0, 0.55)',
    mb: 0.4,
  },
};
const CustomOutlinedInput = ({ ...rest }) => (
  <OutlinedInput {...rest} sx={sx.outlinedInput} />
);
const EditableNumberField = forwardRef<HTMLDivElement, EditableNumberFieldType>(
  (
    {
      title = '',
      editMode,
      suffix,
      fontStyle,
      control,
      name,
      value,
      error,
      rules,
      ...rest
    },
    ref,
  ) => (
    <Stack direction="column" width="100%">
      {title && <Typography sx={sx.titleText}>{title}</Typography>}
      {editMode && (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { onChange, value: val } }) => (
            <NumberFormat
              customInput={CustomOutlinedInput}
              isNumericString
              onValueChange={(v) => {
                onChange(parseInt(v.value, 10));
              }}
              value={val || ''}
              suffix={suffix || ''}
              error={error}
            />
          )}
        />
      )}
      {!editMode && (
        <Typography sx={fontStyle && { ...fontStyle }}>
          {value} Years
        </Typography>
      )}
    </Stack>
  ),
);

EditableNumberField.defaultProps = {
  title: null,
  editMode: false,
  fontStyle: null,
  suffix: '',
  value: '',
  name: 'age',
  error: false,
  rules: {},
};

export default EditableNumberField;
