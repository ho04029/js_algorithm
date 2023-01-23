function solution(n, k) {
    const free_juice = Math.floor(n / 10);
    return n * 12000 + 2000 * (k - free_juice);
}