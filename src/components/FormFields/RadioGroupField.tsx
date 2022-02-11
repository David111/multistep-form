import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { Radio, FormControl, FormControlLabel, FormHelperText, FormLabel, RadioGroup } from '@material-ui/core';
import RadioField from './RadioField';
import useStyles from '../../styles';
export default function RadioGroupField(props) {
  const classes = useStyles();
  const { label, ...rest } = props;
  const { options } = rest;
  console.log('radio------');
  console.log(rest);
  console.log('------');
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;
  console.log('field------');
  console.log(field);
  console.log('------');

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function _onChange(e) {
    setValue(e.target.value);
  }

  return (
    <FormControl {...rest}>
      {/* <FormControlLabel
        value={field.checked}
        checked={field.checked}
        control={<Radio {...field} onChange={_onChange} />}
        label={label}
      /> */}
      <FormLabel className={classes.radioLabel}>{label}</FormLabel>
      <RadioGroup value={field.value} onChange={_onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option._uid}
            value={option.value}
            control={<Radio />}
            label={<RadioField option={option} />}
          />
        ))}
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
      </RadioGroup>
      {_renderHelperText()}
    </FormControl>
  );
}
