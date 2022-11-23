function solution(a, b) {
    return a.reduce((sol, cur, idx) => {return sol + cur * b[idx]}, 0);
}