function solution(array, n) {
    array = array.sort();
    const tmp = array.map(num => Math.abs(num - n));
    return array[tmp.indexOf(Math.min(...tmp))];
}