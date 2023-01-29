function solution(k, m, score) {
    let apple = score.sort((a, b) => b - a).slice(0, score.length - score.length % m);
    let answer = 0;
    
    for(let i = 0 ; i < apple.length / m ; i++){
        let box = apple.slice(i * m , i * m + m);
        answer += Math.min(...box) * m;
    }
    
    return answer;
}