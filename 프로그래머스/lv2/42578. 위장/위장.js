function solution(clothes) {
    var answer = 1;
    let clothes_obj = {};
    for(let cloth of clothes){
        if(!clothes_obj[cloth[1]]){
            clothes_obj[cloth[1]] = [cloth[0]];
        }else {
            clothes_obj[cloth[1]].push(cloth[0]);
        }
    }
    
    for(let cloth in clothes_obj){
        answer *= (clothes_obj[cloth].length + 1);
    }
    
    return answer - 1;
}