function solution(s) {
    var answer = [];
    const s2 = [];
    for(let i = 0 ; i < s.length ;i++){
        if(s2.includes(s[i])){
            answer.push(i - s2.lastIndexOf(s[i]));
            s2.push(s[i])
        }else{
            answer.push(-1);
            s2.push(s[i]);
        }
    }
    return answer;
}