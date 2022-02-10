import React, { useState, useEffect, useMemo } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';
import CustomForm from '../components/CustomForm';
import { getFieldModel, getInitalFormValues } from '../utils/utils';
import useStyles from '../styles';

export default function App({ formData }): JSX.Element {
  const classes = useStyles();
  const { data, title: formId } = formData;
  const [activeStep, setActiveStep] = useState(0);
  const steps = data.length;
  const isLastStep = activeStep === steps.length - 1;
  const fieldsModel = useMemo(() => getFieldModel(data), [formData]);
  // const pageFields = data.map();
  const initalFormValues = useMemo(() => getInitalFormValues(fieldsModel), [fieldsModel]);

  // console.log(JSON.stringify(formData, null, 4));
  console.log(fieldsModel);
  console.log(initalFormValues);
  console.log(data);
  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }
  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    // actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }
  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function _renderStepContent(step) {
    const { fields, title } = data[step];
    return <CustomForm formField={fields} title={title} />;
  }
  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <Formik initialValues={initalFormValues} onSubmit={_handleSubmit}>
      {({ isSubmitting }) => (
        <Form id={formId}>
          {_renderStepContent(activeStep)}
          <div className={classes.buttons}>
            {activeStep !== 0 && (
              <Button onClick={_handleBack} className={classes.button}>
                Back
              </Button>
            )}
            <div className={classes.wrapper}>
              <Button
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                {isLastStep ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/form');
  const formData = await res.json();
  return {
    props: {
      formData,
    },
  };
}
