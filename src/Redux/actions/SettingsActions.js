export const updateData = (data) => {
    return {
        type: "UPDATE_DATA",
        payload: data
    }
};

export const removeData = () => {
    return {
        type: "REMOVE_DATA"
    }
};