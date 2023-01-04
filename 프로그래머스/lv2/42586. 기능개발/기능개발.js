function solution(progresses, speeds) {
    var answer = [];
    let restDay = progresses.slice().map((pr, idx) => Math.ceil((100-pr)/speeds[idx]));
    let tmp = 0
    for(let i = 0 ; i < restDay.length ; i++){
        if(tmp < restDay[i]){
            tmp = restDay[i];
            answer[answer.length] = 1;
        }else {
            answer[answer.length - 1]++
        }
    }
    return answer;
}