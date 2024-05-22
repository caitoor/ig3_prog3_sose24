export function sortPlanets(array, key, direction) {
    return array.sort((a, b) => {
        if (direction === 'asc') {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
        } else if (direction === 'desc') {
            if (a[key] > b[key]) return -1;
            if (a[key] < b[key]) return 1;
        }
        return 0;
    });
}