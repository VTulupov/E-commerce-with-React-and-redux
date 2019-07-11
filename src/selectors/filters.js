
const getAllFilters = state => state.filters;

const getSearchBoxInput = state => state.filters.name;

export {
    getAllFilters,
    getSearchBoxInput
}