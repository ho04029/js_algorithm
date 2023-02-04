function solution(X, Y) {
    var answer = "";
    const x_num = {};
    const y_num = {};
    
    X.split("").forEach(i => {
        x_num[i] ? x_num[i]++ : x_num[i] = 1;
    })
   Y.split("").forEach(i => {
        y_num[i] ? y_num[i]++ : y_num[i] = 1;
    })
    
    for(let i = 9 ; i >= 0 ; i--){
        if(x_num[`${i}`] && y_num[`${i}`]){
            for(let j = 0 ; j < Math.min(x_num[`${i}`], y_num[`${i}`]) ; j++){
                answer += `${i}`
            }
        }
    }
    
    if(!answer) return "-1";
    
    let zero_check = answer.replaceAll("0", "");
    if(!zero_check) return "0";
    
    return answer;
}