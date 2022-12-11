import React from 'react';
import {useFormikContext} from 'formik';

import ImageInputList from '../../ImageInputList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function FormImagePicker({name}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  const imageUriList = values[name];

  const handleAddImage = uri => {
    setFieldValue(name, [...imageUriList, uri]);
  };

  const handleRemoveImage = uri => {
    setFieldValue(
      name,
      imageUriList.filter(imageUri => imageUri !== imageUri),
    );
  };

  return (
    <>
      <ImageInputList
        imageUriList={imageUriList}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
