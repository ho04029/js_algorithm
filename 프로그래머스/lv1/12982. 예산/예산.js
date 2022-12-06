function solution(d, budget) {
    d.sort((a,b) => a-b);
    let answer = 0
    let i = 0;
    do{
        answer += d[i]
        i++
    }while(answer <= budget)
    return i-1;
}