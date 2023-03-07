function solution(word) {
    const dic = ["A", "E", "I","O", "U"];
    const li = [781, 156, 31, 6, 1];
    var answer = 0;
    
    for(let i = 0; i < word.length ; i++){
        answer += dic.indexOf(word[i]) * li[i];
    }
       
    return answer + word.length
}