export const setTextFilter = (name) => ({
  type: 'SET_TEXT_FILTER',
  name
})

export const setCheckboxFilter = (mark) => ({
  type: 'SET_CHECKBOX_FILTER',
  mark
})

export const removeCheckboxFilter = (mark) => ({
  type: 'REMOVE_CHECKBOX_FILTER',
  mark
})