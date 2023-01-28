function solution(chicken) {
    var answer = Math.floor(chicken / 10);
    let tmp = Math.floor(chicken / 10) + chicken % 10;
    
    while(tmp >= 10){
        let service = Math.floor(tmp / 10);
        answer += service;
        tmp = service + tmp % 10
    }
    
    return answer;
}