const sortConditions = (selectedSorting, dataSelectedToSorting, setSortedData) => {
    if (selectedSorting === "A-->Z") {
        const compare = (a, b) => {
            if (a.name < b.name) {
                return -1;
            }
        };
        const sortedArray = dataSelectedToSorting.sort(compare);
        //The spread operator is necessary because I set the same array only in a changed order,
        //so react does not see the changes and does not refresh the view.
        //As a result, it will not display the sorted products to the user.
        return setSortedData([...sortedArray]);
    } else if (selectedSorting === "Z-->A") {
        const compare = (a, b) => {
            if (a.name > b.name) {
                return -1;
            }
        };
        const sortedArray = dataSelectedToSorting.sort(compare);
        return setSortedData([...sortedArray]);
    } else if (selectedSorting === "KalorieUp") {
        const compare = (a, b) => {
            if (a.caloriesIn100 < b.caloriesIn100) {
                return -1;
            }
        };

        const sortedArray = dataSelectedToSorting.sort(compare);
        return setSortedData([...sortedArray]);
    } else if (selectedSorting === "KalorieDown") {
        const compare = (a, b) => {
            if (a.caloriesIn100 > b.caloriesIn100) {
                return -1;
            }
        };
        const sortedArray = dataSelectedToSorting.sort(compare);
        return setSortedData([...sortedArray]);
    }

}

export default sortConditions;