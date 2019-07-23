const validateForm = (step) => (values) => {
  let errors = {};

    if (step === 0) {
      if (!values.firstName) {
        errors.firstName = 'Please add your First Name'
      } else if (!values.firstName.trim().match(/^[a-zA-Z ]*$/)) {
        errors.firstName = 'Please add a valid name with at least 2 characters'
      }

      if (!values.lastName) {
        errors.lastName = 'Please add your Last Name'
      } else if (!values.firstName.trim().match(/^[a-zA-Z ]*$/)) {
        errors.lastName = 'Please add a valid Last Name with at least 2 characters'
      }

      if (!values.address) {
        errors.address = 'Please add an address'
      } else if (!values.address.trim().match(/^[a-zA-Z0-9/ ]{2,}$/)) {
        errors.address = 'Please add a valid address'
      }

      if (!values.city) {
        errors.city = 'Please add a city'
      } else if (!values.city.trim().match(/^[a-zA-Z ]{2,}$/)) {
        errors.city = 'Please add a valid city'
      }

      if (!values.region) {
        errors.region = 'Please add a region'
      } else if (!values.region.trim().match(/^[a-zA-Z ]{2,}$/)) {
        errors.region = 'Please add a valin region'
      }

      if (!values.zip) {
        errors.zip = 'Please add a zip code'
      } else if (!values.zip.trim().match(/^[0-9]{2,}$/)) {
        errors.zip = 'Please add a valid zip code'
      }

      if (!values.country) {
        errors.country = 'Please add a Country'
      } else if (!values.country.trim().match(/^[a-zA-Z ]{2,}$/)) {
        errors.country = 'Please add a valid Country'
      }
    } else if (step === 1) {
      if (!values.cardName) {
        errors.cardName = 'Please add the name on the card'
      } else if (!values.cardName.trim().match(/^[a-zA-Z ]{2,}$/)) {
        errors.cardName = 'Please add a valid name'
      }

      if (!values.cardNumber) {
        errors.cardNumber = 'Please add your card number'
      } else if (!values.cardNumber.trim().match(/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/)) {
        errors.cardNumber = 'Please add a valid Master Card number'
      }

      if (!values.expiryDate) {
        errors.expiryDate = 'Please add the expiry date of your card'
      } else if (!values.expiryDate.trim().match(/^\d{2}\/\d{2}$/)) {
        errors.expiryDate = 'Please add a valid date'
      }

      if (!values.CVV) {
        errors.CVV = 'Please add the 3 numbers on the back of the card'
      } else if (!values.CVV.trim().match(/^[0-9]{3,}$/) || values.CVV.trim().length > 3) {
        errors.CVV = 'Please add a valid code, on the back of the card'
      }
    }
  return errors;
}

export default validateForm;