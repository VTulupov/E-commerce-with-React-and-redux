
export const getAllPhones = state => state.phonesReducer.phones;

export const getCartState = state => state.phonesReducer.cart;

export const getCartTotal = state => state.phonesReducer.total;

export const getFilteredPhones = state => {
    const { phonesReducer: { phones }, filters } = state;
    return phones.filter((phone) => {
        const searchText = (phone.brand.toLowerCase() + ' ' + phone.name.toLowerCase()).includes(filters.name.toLowerCase().trim())

        if (filters.brand.length > 0 && filters.name.length === 0) {
            return filters.brand.includes(phone.brand)
        } else if (filters.name.length !== 0 && filters.brand.length === 0) {
            return searchText
        } else if (filters.name.length > 0 && filters.name.length > 0) {
            return filters.brand.includes(phone.brand) && searchText;
        } else {
            return phone
        }
    })
};