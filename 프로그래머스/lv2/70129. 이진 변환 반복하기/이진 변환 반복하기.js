function solution(s) {
    var answer = [0, 0];
    
    while(s !== "1"){
        answer[0]++;
        for(let i of s){
            if(i == 0) answer[1]++
        }
        s = parseInt(s.split(0).join("").length).toString(2)
    }
    return answer;
}