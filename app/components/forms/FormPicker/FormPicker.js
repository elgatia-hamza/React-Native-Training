import React from 'react';
import {useFormikContext} from 'formik';

import Picker from '../../Picker';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  return (
    <>
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        setSelectedItem={item => setFieldValue(name, item)}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
