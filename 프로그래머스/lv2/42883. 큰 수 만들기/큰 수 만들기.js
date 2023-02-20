function solution(number, k) {
    number = number.split("").map(cur => parseInt(cur));
    let answer = [number[0]],
        term = 0;
    
    for(let i = 1 ; i < number.length ; i++){
        if(answer[answer.length - 1] < number[i]){
            for(let j = answer.length - 1 ; j >= 0 ; j-- ){
                if(answer[j] < number[i]){
                    answer.pop();
                    term++;
                }
                if(term === k){
                    return answer.concat(number.slice(i, number.length)).join("");
                }
                if(answer.length === 0) break;
            }
            
        } 
        answer.push(number[i]);
        if(term === k){
            return answer.concat(number.slice(i + 1, number.length)).join("");
        }
    }
    
    while(term < k){
        let min = Math.min(...answer);
        answer.splice(answer.indexOf(min), 1);
        term++;
        let sort = new Set(answer);
        if(sort === 1){
            return Array(number.length - k - 1).fill(answer[0]).join("");
        }
    }
    
    return answer.join("");
}