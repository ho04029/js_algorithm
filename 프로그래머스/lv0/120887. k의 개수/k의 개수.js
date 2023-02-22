function solution(i, j, k) {
    var answer = 0;
    for(let l = i ; l <= j ; l++){
        let num = l.toString();
        if(num.includes(k)){
            for(let m = 0 ; m < num.length ; m++){
                if(num[m] === k.toString() ) answer++;
            }
        } 
    }
    return answer;
}