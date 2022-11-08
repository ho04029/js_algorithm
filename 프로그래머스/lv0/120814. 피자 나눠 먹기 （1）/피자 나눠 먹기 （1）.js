function solution(n) {
    if(n%7 == 0){
        return n / 7
    }
    return parseInt(n / 7 + 1)
}