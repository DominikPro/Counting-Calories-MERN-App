const productsReducer = (products = [
    { name: "Jabłko", defaultPortion: 170, caloriesIn100: 38, remarks: "" },
    { name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "" },
    { name: "Grzanki", defaultPortion: 25, caloriesIn100: 411, remarks: "" },
    { name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "" },
    { name: "Bakalie", defaultPortion: 50, caloriesIn100: 250, remarks: "" },
    { name: "Brzoskwiania", defaultPortion: 120, caloriesIn100: 47, remarks: "" },
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