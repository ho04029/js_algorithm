function solution(arr) {
    var answer = [];
    let i = 0;
    while(true){
        if(i >= arr.length) break;
        if(answer.length === 0){
            answer.push(arr[i]);
        } else{
            if(answer.at(-1) === arr[i]){
                answer.pop();
            } else{
                answer.push(arr[i]);
            }
        }
        i++
        
    }
    
    if(answer.length === 0){
        return [-1]
    }
    
    return answer;
}