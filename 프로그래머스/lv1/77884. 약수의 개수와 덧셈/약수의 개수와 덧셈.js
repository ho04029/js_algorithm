function solution(left, right) {
    var answer = 0;
    for(let i = left ; i <= right ; i++){
        let cnt = 0;
        for(let j = 1 ; j <= Math.sqrt(i) ; j++){
            if(i % j === 0){
                if(i === j * j) cnt++;
                cnt += 2;
            }
        }
        
        cnt % 2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}