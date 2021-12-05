const caloriesReducer = (calories = [
    { name: "Jabłko", defaultPortion: 170, caloriesIn100: 38, remarks: "Gala", date: "04.12.2021" },
    { name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "04.12.2021" },
    { name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "", date: "04.12.2021" },
    { name: "Jabłko", defaultPortion: 170, caloriesIn100: 38, remarks: "Gala", date: "03.12.2021" },
    { name: "Jabłko", defaultPortion: 170, caloriesIn100: 38, remarks: "Gala", date: "03.12.2021" },
    { name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "03.12.2021" },
    { name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "02.12.2021" },
    { name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "", date: "02.12.2021" },
    { name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "", date: "02.12.2021" },
], action) => {
    switch (action.type) {
        case 'ADD_CALORIES':
            return [...calories, action.payload]
        case 'REMOVE_CALORIES':

            return calories

        default:
            return calories;
    }
}
export default caloriesReducer;