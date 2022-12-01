function solution(n) {
    let answer = [0, 1] ; 
    
    for(let i = 1 ; i < n ;i++){
        answer.push((answer[i] + answer[i-1])%1234567)
    }
    return answer[n];
}