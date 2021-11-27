const userSettingsReducer = (settingsUserData = { name: "", weight: 0, finalWeight: 0, dailyAmountOfCalories: 0 }, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return settingsUserData;
        case "REMOVE_DATA":
            return settingsUserData;
        default:
            return settingsUserData;
    }
};
export default userSettingsReducer;
