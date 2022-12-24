function solution(numlist, n) {
    return numlist.sort((a,b) => Math.abs(a-n) > Math.abs(b-n) ? 1 : Math.abs(a-n) === Math.abs(b-n) ? b - a : -1)
}