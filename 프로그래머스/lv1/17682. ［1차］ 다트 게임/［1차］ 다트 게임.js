function solution(dartResult) {
    var answer = [];
    for(let i = 0 ; i < dartResult.length ; i++){
        if(Number(dartResult[i]) || dartResult[i] === '0' ){
            if(dartResult[i + 1] === '0'){
                answer.push(10);
                i++
                continue
            }
            answer.push(parseInt(dartResult[i]));
        } else if(dartResult[i] === 'D'){
            answer[answer.length - 1] **= 2;
        }else if(dartResult[i] === 'T'){
            answer[answer.length - 1] **= 3;
        }else if(dartResult[i] === '*'){
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
        }else if(dartResult[i] === '#'){
            answer[answer.length - 1] *= -1;
        }
    }
    return answer.reduce((acc, cur) => acc + cur, 0);
}