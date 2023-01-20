function solution(n, t, m, p) {
    var answer = '';
    let i = 0;
    while(answer.length < t * m){
        answer += i.toString(n);
        i++;
    }
    let tube = ''
    for(let j = p - 1 ; tube.length < t ; j += m){
        tube += answer[j].toUpperCase();
    }
    return tube
}