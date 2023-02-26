function solution(s) {
    var answer = 0;
    let x = '',
        cnt_x = 0,
        cnt_not_x = 0;
    
    for(let i = 0 ; i < s.length ; i++){
        if(!x)  x = s[i];
        if(s[i] === x) cnt_x++;
        else cnt_not_x++;
        if(cnt_x === cnt_not_x){
            cnt_x = 0;
            cnt_not_x = 0;
            x = '';
            answer++;
        }
        if(i === s.length - 1 && cnt_x !== cnt_not_x) answer++;
    }
    
    return answer;
}