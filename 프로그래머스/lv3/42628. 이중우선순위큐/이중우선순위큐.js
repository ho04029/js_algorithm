function solution(operations) {
    var answer = [];
    for(let i = 0 ; i < operations.length ; i++){
        if(operations[i].includes("I")) {
            answer.push(parseInt(operations[i].slice(2, operations[i].length)));
        } else if(operations[i] === "D 1"){
            let idx = answer.indexOf(Math.max(...answer));
            answer.splice(idx, 1);
            
        } else if(operations[i] === "D -1"){
            let idx = answer.indexOf(Math.min(...answer));
            answer.splice(idx, 1);
        }
    }
    return answer.length === 0 ? [0, 0] : [Math.max(...answer), Math.min(...answer)];
}