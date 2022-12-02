function solution(s) {
    let answer = [];
    const arr = s.split(" ")
    
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr[i].length ; j++){
            if(j%2 === 0){
                answer.push(arr[i][j].toUpperCase())
                continue
            }
            answer.push(arr[i][j].toLowerCase()) 
        }
        answer.push(" ")
    }
    return answer.slice(0, answer.length-1).join("");
}