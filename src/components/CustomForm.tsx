import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import InputField from './FormFields/InputField';
import CheckboxField from './FormFields/CheckboxField';

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
                <Grid item xs={12} sm={6}>
                  <InputField name={field._uid} label={field.label} fullWidth />
                </Grid>
              );
            case 'checkbox':
              return (
                <Grid item xs={12} sm={6}>
                  <CheckboxField name={field._uid} label={field.label} />
                </Grid>
              );
          }
        })}
      </Grid>
    </React.Fragment>
  );
}
