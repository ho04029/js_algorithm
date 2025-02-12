function solution(strArr) {
    let answer = 0;
    let obj = {};
    
    for(let i = 0 ; i < strArr.length ; i++){
        const length = strArr[i].length;
        obj[length] ? obj[length]++ : obj[length] = 1;
    }
    
    Object.keys(obj).forEach(key => {
        if(obj[key] >= answer){
            answer = obj[key]
        }
    })
    
    return answer;
}