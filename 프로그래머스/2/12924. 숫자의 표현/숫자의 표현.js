function solution(n) {
    if(n === 1) return 1
    let i = 0;
    let j = 1;
    let cur = 1
    let answer = 1;
    while(j <= Math.ceil(n / 2)){
        if(cur === n){
            answer++;
            j++;
            cur += j;
        }else if(cur < n){
            j++;
            cur += j;
        }else if(cur > n){
            cur -= i;
            i++;
        }
    }
    return answer;
}