function solution(my_str, n) {
    const answer = new Array(Math.ceil(my_str.length/n)).fill("");
    
    for(let j = 0 ; j < Math.ceil(my_str.length/n) ; j++){
        for(let i = j * n ; i < (j + 1) * n  ; i++){
            if(!my_str[i]){
                break
            }
            answer[j] += my_str[i]
        }
    }
    
    return answer;
}