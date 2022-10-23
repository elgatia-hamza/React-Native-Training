import {useFormikContext} from 'formik';
import React from 'react';

import AppTextInput from '../../TextInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function AppFormField({name, width, ...otherProps}) {
  const {errors, handleChange, setFieldTouched, touched} = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
