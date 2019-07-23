import { useState } from 'react';

export const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(validate(values)).length === 0) {
      callback();
      setErrors({});
    } else {
      setErrors(validate(values))
    }
  }
  
  return {
    onChange,
    onSubmit,
    errors,
    values
  }
}