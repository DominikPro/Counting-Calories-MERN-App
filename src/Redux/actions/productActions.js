export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}
export const removeProduct = (productId) => {
    return {
        type: "REMOVE_PRODUCT",
        payload: productId
    }
}

export const modifyProduct = (changedProduct) => {
    return {
        type: "MODIFY_PRODUCT",
        payload: changedProduct
    }
}

