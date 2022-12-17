function solution(sides) {
    var answer = 0;
    for(let i = 1 ; i <= Math.max(...sides) ; i++){
        if(Math.max(...sides) < i + Math.min(...sides)){
            answer++
        }
    }
    
    for(let i = Math.max(...sides) + 1 ; i < sides[0] + sides[1] ; i++){
        if(i < sides[0] + sides[1]){
            answer++
        }
    }
    return answer;
}