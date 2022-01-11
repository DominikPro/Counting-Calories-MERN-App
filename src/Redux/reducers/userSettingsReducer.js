const userSettingsReducer = (userData =
    { name: "Jan", weight: 120, finalWeight: 82, dailyAmountOfCalories: 2800 }, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {
                ...userData,
                [action.payload.name]: action.payload.value
            }
        case "REMOVE_DATA":
            return userData = { name: "", weight: 0, finalWeight: 0, dailyAmountOfCalories: 0 }

        default:
            return userData;
    }
};
export default userSettingsReducer;
