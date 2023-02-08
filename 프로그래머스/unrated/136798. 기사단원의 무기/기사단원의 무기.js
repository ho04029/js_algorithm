function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1 ; i <= number ; i++){
        let cnt = 0;
        
        for(let j = 1 ; j <= Math.sqrt(i) ; j++){
            if(i % j === 0){
                if(i / j === j ) cnt++;
                else cnt += 2;
            }
        }
        
        cnt > limit ? answer += power : answer += cnt;
    }
    
    return answer;
}