function solution(num_list, n) {
    var answer = [];
    for(let i = 0 ; i < num_list.length ; i+=n){
        let tmp = [];
        for(let j = i ; j < i + n ; j++){
            tmp.push(num_list[j]);
        }
        answer.push(tmp);
    }
    return answer;
}