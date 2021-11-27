const productsReducer = (products = { name: "", portion: "", caloriesIn100: "", }, action) => {
    switch (action.type) {
        case 'ADD_Product':

            return products;
        case "REMOVE_PRODUCT":

            return products;

        default:
            return products;
    }
}
export default productsReducer;