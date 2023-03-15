function solution(citations) {
    var answer = [];
    for(let i = 0 ; i <= Math.max(...citations) ; i++){
        let over = 0; 
        for(let j = 0 ; j < citations.length ; j++){
            if(i <= citations[j]) over++;
        }
        if(over >= i) answer.push(i);
    }
    
    if(answer.length === 0) return citations.length;
    return Math.max(...answer);
}