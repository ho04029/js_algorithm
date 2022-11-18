function solution(num) {
    if(num === 1){
        return 0
    }
    let answer = num
    for(let i = 1; i <= 500 ; i++){
        if(answer % 2 === 0){
            answer = answer / 2
            if(answer === 1){
                return i
                break
            }
        } else {
            answer = answer * 3 + 1
        }
        
    }
    return -1
}