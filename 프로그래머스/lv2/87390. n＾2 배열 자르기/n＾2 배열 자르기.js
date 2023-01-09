function solution(n, left, right) {
    return Array(right - left + 1).fill(0).map((item, idx) => {
        let origin_idx = left + idx;
        let row = Math.floor(origin_idx / n);
        let col = origin_idx % n;
        return row > col ? row + 1 : col + 1
        });
}