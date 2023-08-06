export function orderMapByValue(myMap){
    return new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]))
}