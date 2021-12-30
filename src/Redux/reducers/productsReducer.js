const productsReducer = (products = [
    { id: 1, name: "Jabłko", defaultPortion: 170, caloriesIn100: 38, remarks: "", date: "04.12.2021" },
    { id: 2, name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "04.12.2021" },
    { id: 3, name: "Grzanki", defaultPortion: 25, caloriesIn100: 411, remarks: "", date: "04.12.2021" },
    { id: 4, name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "", date: "04.12.2021" },
    { id: 5, name: "Bakalie", defaultPortion: 50, caloriesIn100: 250, remarks: "", date: "04.12.2021" },
    { id: 6, name: "Brzoskwiania", defaultPortion: 120, caloriesIn100: 47, remarks: "", date: "04.12.2021" },
], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...products, action.payload];
        case "REMOVE_PRODUCT":

            return products;

        default:
            return products;
    }
}
export default productsReducer;