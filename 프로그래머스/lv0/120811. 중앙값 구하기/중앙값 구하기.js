function solution(array) {
    const newArray = array.sort((a,b) => a-b);
    return newArray[Math.floor(newArray.length/2) ]
}