import {useFormikContext} from 'formik';
import React from 'react';

import AppTextInput from '../../TextInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function AppFormField({name, width, ...otherProps}) {
  const {errors, setFieldValue, setFieldTouched, touched, values} =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
