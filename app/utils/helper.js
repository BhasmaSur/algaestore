export const filterData = (searchText, algaeData) => {
    const filterData = algaeData.filter((item) => {
        return item?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    });

    return filterData;
}