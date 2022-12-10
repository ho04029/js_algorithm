function solution(s)
{
    let tmp = [s[0]]
    for(let i = 1 ; i < s.length ; i++){
        if(tmp[tmp.length - 1] === s[i]){
            tmp.pop()
            continue;
        }
        tmp.push(s[i])
    }
    
    return tmp.length > 0 ? 0 : 1
}