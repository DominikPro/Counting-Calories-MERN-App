export const addDish = (dish) => {
    return {
        type: "ADD_DISH",
        payload: dish
    }
};

export const changeDishFavorite = (productId) => {
    return {
        type: "CHANGE_DISH_FAVORITE",
        payload: productId
    }
};
