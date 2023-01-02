function solution(n) {
    var answer = 0;
    let tmp = [];
    while(n > 0){
        tmp.push(n % 3);
        n = Math.floor(n / 3);
    }
    for(let i = 0 ; i < tmp.length ; i++){
        answer += Math.pow(3, tmp.length - 1- i) * tmp[i];
    }
    return answer;
}