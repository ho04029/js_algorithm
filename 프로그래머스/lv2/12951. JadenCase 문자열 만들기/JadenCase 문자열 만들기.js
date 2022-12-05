function solution(s) {
    const answer = [];
    for(let i = 0 ; i < s.length ; i++){
        if(answer[i-1] === " "|| i=== 0){
            answer.push(s[i].toUpperCase());
            continue;
        }
        answer.push(s[i].toLowerCase())
    }
    return answer.join("");
}