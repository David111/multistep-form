// import { string, number, boolean, object } from 'yup';
import * as yup from 'yup';
export const getFieldModel = (data) => data.reduce((acc, cur) => acc.concat(...cur.fields), []);
export function getInitalFormValues(fieldsModel) {
  const obj = {};
  for (let item of fieldsModel) {
    const { _uid, type, defaultValue } = item;
    if (type === 'text' || type === 'radio') {
      if (!defaultValue) {
        obj[_uid] = '';
      } else {
        obj[_uid] = defaultValue;
      }
    } else if (type === 'checkbox') {
      if (!defaultValue) {
        obj[_uid] = false;
      } else {
        obj[_uid] = defaultValue;
      }
    }
  }
  return obj;
}
// export function createValidationSchemas(formData) {
//   return formData.map((form) => {
//     const { fields } = form;
//     const validateObj = {};
//     for (let field of fields) {
//       const { type, validation, conditional } = field;
//       let validationRule;
//       if (type === 'boolean') {
//         validationRule = boolean();
//       } else if (type === 'number') {
//         validationRule = number();
//       } else {
//         validationRule = string();
//       }
//       if (validation && validation.isRequired && !conditional) {
//         validationRule = validationRule['required']('Required');
//       }
//       // if (validation && validation.isRequired && conditional) {
//       //   const uid = conditional.field.split('_')[1];
//       //   validationRule = validationRule.when(uid, {
//       //     is: true,
//       //     then: string()['required']('Reqired'),
//       //   });
//       // }
//       validateObj[field._uid] = validationRule;
//     }
//     return object().shape(validateObj);
//   });
// }

export function createYupSchema(schema, config) {
  const { _uid, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]().typeError(`must be ${validationType}`);
  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    console.log(type, params);
    validator = validator[type](...params);
  });
  schema[_uid] = validator;
  return schema;
}
