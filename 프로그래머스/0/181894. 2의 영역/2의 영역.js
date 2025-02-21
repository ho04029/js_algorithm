function solution(arr) {
    if(!arr.includes(2)) return [-1]
    const first = arr.findIndex(cur => cur === 2);
    const last = arr.length - arr.slice().reverse().findIndex(cur => cur === 2);
    return arr.slice(first, last);
}