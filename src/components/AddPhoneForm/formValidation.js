const validateForm = (step) => (values) => {
  let errors = {};

  if (step === 0) {
    if (!values.brand) {
      errors.brand = 'Please select a brand'
    }

    if (!values.name) {
      errors.name = 'Please add a name'
    } else if (!values.name.trim().match(/^[a-zA-Z0-9 ]*$/)) {
      errors.name = 'Please add a valid name'
    }

    if (!values.price) {
      errors.price = 'Please add price'
    } else if (!values.price.trim().match(/^[0-9]*$/)) {
      errors.price = 'Please add only numbers'
    }

    if (!values.description) {
      errors.description = 'Please add a description'
    } else if (!values.description.trim().match(/^[a-zA-Z0-9 ]{10,}$/)) {
      errors.description = 'Please use only letters and numbers and at least 10 characters'
    } else if (values.description.trim().length > 213) {
      errors.description = 'Please use maximum of 213 characters'
    }
  } else if (step === 1) {
    if (!values.size) {
      errors.size = 'Please add size'
    } else if (!values.size.trim().match(/^[a-zA-Z0-9 ]{6,}$/)) {
      errors.size = 'Please use only letters and numbers and at least 6 characters'
    }

    if (!values.resolution) {
      errors.resolution = 'Please add resolution'
    } else if (!values.resolution.trim().match(/^[a-zA-Z0-9 ]{6,}$/)) {
      errors.resolution = 'Please use only letters and numbers and at least 6 characters'
    }

    if (!values.GPU) {
      errors.GPU = 'Please add GPU stats'
    } else if (!values.GPU.trim().match(/^[a-zA-Z0-9 ]{6,}$/)) {
      errors.GPU = 'Please use only letters and numbers and at least 6 characters'
    }

    if (!values.CPU) {
      errors.CPU = 'Please add CPU stats'
    } else if (!values.CPU.trim().match(/^[a-zA-Z0-9 ]{6,}$/)) {
      errors.CPU = 'Please use only letters and numbers and at least 6 characters'
    }

    if (!values.camera) {
      errors.camera = 'Please add camera stats'
    } else if (!values.camera.trim().match(/^[a-zA-Z0-9 ]{6,}$/)) {
      errors.camera = 'Please use only letters and numbers and at least 6 characters'
    }

    if (!values.battery) {
      errors.battery = 'Please add battery stats'
    } else if (!values.battery.trim().match(/^[a-zA-Z0-9 ]{6,}$/)) {
      errors.battery = 'Please use only letters and numbers and at least 6 characters'
    }
  }

  
  return errors;
}

export default validateForm;