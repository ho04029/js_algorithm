function solution(numbers) {
    const tmp = [];
    const answer = Array(numbers.length).fill(-1);
    
    for(let i = 0 ; i < numbers.length ; i++){
        if(tmp.length === 0) { 
            tmp.push([i, numbers[i]]);
            continue;
        }
        if(tmp.at(-1)[1] < numbers[i]){
            while(tmp.length !== 0){
                if(tmp.at(-1)[1] < numbers[i]){
                    answer[tmp.at(-1)[0]] = numbers[i]
                    tmp.pop();
                }else{
                    break;
                }
            }
        }
        tmp.push([i, numbers[i]]);
            
    }
    return answer;
}