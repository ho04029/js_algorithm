function solution(s) {
    if(!(s.length === 4 || s.length === 6)){
        return false
    }
    const number = [0,1,2,3,4,5,6,7,8,9]
    for(let i = 0 ; i < s.length ; i++){
        if(!(number.includes(parseInt(s[i])))){
            return false
            break
        }
    }
    return true
}