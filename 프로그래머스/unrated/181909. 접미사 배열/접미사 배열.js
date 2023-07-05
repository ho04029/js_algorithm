function solution(my_string) {
    var answer = [];
    const length = my_string.length
    
    for(let i = 0 ; i < length ; i++){
        const a = my_string.slice(length - i - 1, length );
        answer.push(a);
    }
    
    return answer.sort();
}