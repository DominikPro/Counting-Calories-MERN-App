const caloriesReducer = (calories = [

    { listType: "Statistic", id: 1, name: "Jabłko", defaultPortion: 179, caloriesIn100: 38, remarks: "Gala", date: "04.12.2021" },
    { listType: "Statistic", id: 2, name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "04.12.2021" },
    { listType: "Statistic", id: 3, name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "", date: "04.12.2021" },
    { listType: "Statistic", id: 4, name: "Jabłko", defaultPortion: 178, caloriesIn100: 38, remarks: "Gala", date: "03.12.2021" },
    { listType: "Statistic", id: 5, name: "Jabłko", defaultPortion: 177, caloriesIn100: 38, remarks: "Gala", date: "03.12.2021" },
    { listType: "Statistic", id: 6, name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "03.12.2021" },
    { listType: "Statistic", id: 7, name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "02.12.2021" },
    { listType: "Statistic", id: 8, name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "", date: "02.12.2021" },
    { listType: "Statistic", id: 9, name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "", date: "02.12.2021" },
], action) => {

    switch (action.type) {
        case 'ADD_CALORIES':
            return [...calories, action.payload]
        case 'REMOVE_CALORIES':
            console.log(action.payload)
            return calories.filter(item => item.id !== action.payload)

        default:
            return calories;
    }
}
export default caloriesReducer;