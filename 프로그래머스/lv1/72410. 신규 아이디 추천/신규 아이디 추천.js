function solution(new_id) {
    let answer = new_id.replace(/[^\w\.-]/g, "").toLowerCase();
    answer = answer.replace(/\.{1,}/g, ".")
    
    if(answer[0] === ".") answer = answer.slice(1, answer.length);
    if(answer.length > 15) answer = answer.slice(0, 15);
    if(answer[answer.length - 1] === ".") answer = answer.slice(0, answer.length - 1);
    
    
    if(answer.length === 0) return "aaa"
    if(answer.length > 3) return answer;
    
    while(answer.length < 3){
        answer += answer[answer.length - 1];
    }
    return answer
}