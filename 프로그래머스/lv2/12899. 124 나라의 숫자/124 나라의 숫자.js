function solution(n) {
    var answer = [];
    let num = [1, 2, 4];
    
    while(n >= 1){
        let tmp = (n - 1) % 3;
        answer.push(tmp);
        n = Math.floor((n - tmp) / 3);
    }
    
    return answer.reverse().map(cur => num[cur]).join("");
}