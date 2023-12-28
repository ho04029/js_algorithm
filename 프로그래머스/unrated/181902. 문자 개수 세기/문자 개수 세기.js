function solution(my_string) {
    var answer = Array(52).fill(0);
    for(let i = 0 ; i < my_string.length ; i++){
        const char = my_string[i].charCodeAt();
        if(char > 96) answer[char - 71]++;
        else answer[char - 65]++;
    }
    return answer;
}
