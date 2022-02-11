import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import InputField from './FormFields/InputField';
import CheckboxField from './FormFields/CheckboxField';
import RadioGroupField from './FormFields/RadioGroupField';
export default function CustomForm({ formField, title }) {
  console.log(formField);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {formField.map((field) => {
          switch (field.component) {
            case 'input':
              return (
                <Grid item xs={12} sm={6} key={field._uid}>
                  <InputField name={field._uid} label={field.label} fullWidth />
                </Grid>
              );
            case 'checkbox':
              return (
                <Grid item xs={12} sm={6} key={field._uid}>
                  <CheckboxField name={field._uid} label={field.label} />
                </Grid>
              );
            case 'radio':
              return (
                <Grid item xs={12} sm={6} key={field._uid}>
                  <RadioGroupField name={field._uid} label={field.label} options={field.options} />
                </Grid>
              );
          }
        })}
      </Grid>
    </React.Fragment>
  );
}
