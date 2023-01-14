function solution(s) {
    var array = s.split(" ");
    const max = Math.max(...array);
    const min = Math.min(...array)
    return `${min} ${max}`;
}