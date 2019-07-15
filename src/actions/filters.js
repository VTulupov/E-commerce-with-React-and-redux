export const setTextFilter = (name) => ({
  type: 'SET_TEXT_FILTER',
  name
})

export const setCheckboxFilter = (brand) => ({
  type: 'SET_CHECKBOX_FILTER',
  brand
})

export const removeCheckboxFilter = (brand) => ({
  type: 'REMOVE_CHECKBOX_FILTER',
  brand
})

export const clearFilters = () => ({
  type: 'CLEAR_FILTERS'
})