function solution(n, s) {
    if(n > s) return [-1];
    let answer = [];
    
    while(n){
        answer.push(Math.ceil(s / n));
        s -= Math.ceil(s / n );
        n--;
    }
    
    return answer.sort();
}