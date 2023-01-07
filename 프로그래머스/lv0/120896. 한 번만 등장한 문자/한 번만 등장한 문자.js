function solution(s) {
    let tmp = [];
    let answer = [];
    for(let i = 0 ; i < s.length ; i++){
        if(i !== s.indexOf(s[i])) tmp.push(s[i])
    }
    for(let i = 0 ; i < s.length ; i++){
        if(!tmp.includes(s[i])) answer.push(s[i])
    }
    
    return answer.sort().join("")
}