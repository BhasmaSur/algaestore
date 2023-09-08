export const filterData = (searchText, algaeData, selectedFilter) => {
    const filterData = algaeData.filter((item) => {
        if(selectedFilter === ""){
            return item?.name?.toLowerCase()?.includes(searchText.toLowerCase())
        }
        else{
            return item?.name?.toLowerCase()?.includes(searchText.toLowerCase()) && item?.subtype?.toLowerCase() === selectedFilter.toLowerCase()
        }
    });

    return filterData;
}