function solution(A, B) {
    
    return [...B, ...B].join("").indexOf(A);
}