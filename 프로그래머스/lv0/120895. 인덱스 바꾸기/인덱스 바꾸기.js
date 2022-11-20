function solution(my_string, num1, num2) {
    var answer = [];
    for(let i = 0 ; i < my_string.length; i++){
        if(!(i===num1||i===num2)){
            answer.push(my_string[i])
            continue
        }
        if(i===num1){
            answer.push(my_string[num2])
            continue
        }
        answer.push(my_string[num1])
        
    }
    return answer.join("");
}