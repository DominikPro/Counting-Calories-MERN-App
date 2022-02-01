const sortConditions = (selectedSorting, dataSelectedToSorting, setSortedData) => {
    if (selectedSorting === "A-->Z") {
        const compare = (a, b) => {
            if (a.name < b.name) {
                return -1;
            }
        };
        const sortedArray = dataSelectedToSorting.sort(compare);
        console.log(sortedArray)
        //The spread operator is necessary because I set the same array only in a changed order,
        //so react does not see the changes and does not refresh the view.
        //As a result, it will not display the sorted products to the user.
        return setSortedData([...sortedArray]);
    } else if (selectedSorting === "Z-->A") {
        console.log("z---a");
        const compare = (a, b) => {
            if (a.name > b.name) {
                return -1;
            }
        };
        const sortedArray = dataSelectedToSorting.sort(compare);
        console.log(sortedArray)
        return setSortedData([...sortedArray]);
    } else if (selectedSorting === "CalorieUp") {
        const compare = (a, b) => {
            if (a.caloriesIn100 < b.caloriesIn100) {
                return -1;
            }
        };

        const sortedArray = dataSelectedToSorting.sort(compare);
        console.log(sortedArray)
        return setSortedData([...sortedArray]);
    } else if (selectedSorting === "CalorieDown") {
        const compare = (a, b) => {
            if (a.caloriesIn100 > b.caloriesIn100) {
                return -1;
            }
        };
        const sortedArray = dataSelectedToSorting.sort(compare);
        console.log(sortedArray)
        return setSortedData([...sortedArray]);
    } else if (selectedSorting === "LikedUp") {
        const compare = (a, b) => {
            if (a.favorite < b.favorite) {
                return -1;
            }
        }
        const sortedArray = dataSelectedToSorting.sort(compare);
        console.log(sortedArray)
        return setSortedData([...sortedArray])

    } else if (selectedSorting === "LikedDown") {
        const compare = (a, b) => {
            if (a.favorite > b.favorite) {
                return -1;
            }
        }
        const sortedArray = dataSelectedToSorting.sort(compare);
        console.log(sortedArray)
        return setSortedData([...sortedArray])
    }

}

export default sortConditions;