export const addCalories = (product) => {
    return {
        type: "ADD_CALORIES",
        payload: product
    }
};

export const removeCaloris = () => {
    return {
        type: "REMOVE_CALORIES"
    }
}