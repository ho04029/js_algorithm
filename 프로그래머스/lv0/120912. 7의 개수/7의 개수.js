function solution(array) {
    var answer = 0;
    array = array.join("");
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] === "7") answer++;
    }
    return answer;
}