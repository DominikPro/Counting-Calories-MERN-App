export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}
export const removeProduct = () => {
    return {
        type: "REMOVE_PRODUCT"
    }
}