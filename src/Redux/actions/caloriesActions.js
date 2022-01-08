export const addCalories = (product) => {
    return {
        type: "ADD_CALORIES",
        payload: product
    }
};

export const removeCaloris = (productId) => {
    return {
        type: "REMOVE_CALORIES",
        payload: productId
    }
}

export const modifyCalories = (changedProduct) => {
    return {
        type: "MODIFY_CALORIES",
        payload: changedProduct
    }
}