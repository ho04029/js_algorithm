function solution(n) {
    const answer = Array(n + 1).fill(true);
    answer[0] = false;
    answer[1] = false;
    
    for(let i = 2 ; i < n ; i++){
        if(!answer[i]) continue;
        for(let j = i * i ; j <= n ; j+= i){
            answer[j] = false;
        }
    }
    return answer.filter(num => num === true).length;
}