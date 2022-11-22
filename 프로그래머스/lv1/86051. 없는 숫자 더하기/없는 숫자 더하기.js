function solution(numbers) {
    var answer = [];
    for(let i = 0 ; i <= 9 ; i++){
        if(!(numbers.includes(i))){
            answer.push(i)
        }
    }
    return answer.reduce((sol, cur) => {return sol + cur},0)
}