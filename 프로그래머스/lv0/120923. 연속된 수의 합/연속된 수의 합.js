function solution(num, total) {
    let start_num = num % 2 === 0 ? parseInt(total / num ) - num / 2 + 1 : 
        total / num - parseInt(num / 2);
    return Array(num).fill(0).map((cur, idx) =>  start_num + idx);
}