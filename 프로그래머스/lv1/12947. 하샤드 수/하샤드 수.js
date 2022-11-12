function solution(x) {
    const a = Math.floor(x/1000) + Math.floor((x%1000)/100) + Math.floor((x%100)/10) + Math.floor(x%10)
    return x % a === 0;
}