function solution(n) {
    let answer = [];
    let arr = [2]
    for(let i = 2 ; i <= n ; i++){
        if(n%i === 0){
            for(let j=0; j<answer.length; j++){
                if(i%answer[j]!==0) continue
                arr.push(answer[j])
            }
            if(arr.length < 2){
               answer.push(i) 
            }
            arr = [2]
        }
    }
    return answer;
}