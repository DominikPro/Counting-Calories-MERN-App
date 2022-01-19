export const addWeight = (weight) => {
    return {
        type: "ADD_WEIGHT",
        payload: weight
    }
}

export const editWeight = (editedWeight) => {
    return {
        type: "EDIT_WEIGHT",
        payload: editedWeight
    }
}

export const removeWeight = (removedWeight) => {
    return {
        type: "REMOVE_WEIGHT",
        payload: removedWeight
    }
}