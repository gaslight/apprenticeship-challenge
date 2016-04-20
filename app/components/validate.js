const validate = (values) => {
  const errors = {}
  const validateSKU = new RegExp('^[a-z0-9A-Z]{10,20}$')
  const validatePrice = new RegExp('\d{1,10}(\.\d{1,2})?')

  if (!values.sku || values.sku.trim() === '') {
    errors.sku = 'Enter a SKU'
  } else if (validateSKU.test(values.sku)) {
    errors.sku = 'Invalid a SKU'
  } else if (values.sku.length < 8) {
    errors.sku = 'SKU is too short'
  } else if (values.sku.length > 18) {
    errors.sku = "SKU too is too long"
  }
  if (!values.text || values.text.trim() === '') {
    errors.text = 'Enter an item'
  } else if (values.text.length > 20) {
    errors.text = 'Item is too long'
  }
  if (!values.price || values.price.trim() === '') {
    errors.price = 'Enter a price'
  } else if (!values.price || validatePrice.test(values.price)) {
    errors.price = 'Invalid price'
  }

  return errors
}

export default validate
