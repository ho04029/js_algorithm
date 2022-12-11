function solution(s){
    let cnt = 0
    
    for(let i = 0; i < s.length ; i+=1){
        s[i] === "(" ? cnt++ : cnt--;
        if(cnt < 0){
            return false
        }
    }

    return cnt === 0 ? true : false ;
}