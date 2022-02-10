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
