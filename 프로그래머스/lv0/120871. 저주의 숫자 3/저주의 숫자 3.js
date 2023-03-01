function solution(n) {
    var answer = 0;
    let i = 0;
    
    while(i < n){
        i++;
        answer++;
        if(answer % 3 === 0) i--;
        else if(answer.toString().includes("3")) i--;
    }
    
    return answer;
}