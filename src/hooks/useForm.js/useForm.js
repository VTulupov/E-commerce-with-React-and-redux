import { useState } from 'react';

export const useForm = (callback, initialState = {}, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // if (Object.keys(validate(values)).length === 0) {
    //   
    //   setValues(initialState);
    // } else {
    //   setErrors(validate(values));
    // }
    callback();
  }

  return {
    onChange,
    onSubmit,
    errors,
    values
  }
}