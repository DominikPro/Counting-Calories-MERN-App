const weightReducer = (weightList = [
    { id: "1", weight: 85, date: "11.01.2022" },
    { id: "2", weight: 84.5, date: "14.01.2022" },
    { id: "3", weight: 84, date: "16.01.2022" },
    { id: "4", weight: 84.2, date: "19.01.2022" },
],
    action) => {

    switch (action.type) {
        case 'ADD_WEIGHT':
            return weightList.concat(action.payload)

        case 'EDIT_WEIGHT':
            const index = weightList.findIndex((item) => item.id === action.payload.id)
            const editedWeightList = [...weightList]
            editedWeightList[index] = action.payload


            return editedWeightList

        case 'REMOVE_WEIGHT':

            return weightList.filter((item) => item !== action.payload)

        default:
            return weightList;

    }


};

export default weightReducer;
