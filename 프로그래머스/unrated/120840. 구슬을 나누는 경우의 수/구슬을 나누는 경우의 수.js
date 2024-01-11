function solution(balls, share) {
    let answer = 1;
    for(let i = 0 ; i < share ; i++){
        answer = answer * (balls - i);
    }
    for(let i = 1 ; i <= share ; i++){
        answer = answer / i;
    }
    return Math.round(answer);
}