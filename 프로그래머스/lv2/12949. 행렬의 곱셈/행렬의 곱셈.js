function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0 ; i < arr1.length ; i++){
        let tmp = [];
        for(let j = 0 ; j < arr2[0].length ; j++){
            tmp.push(arr1[i].reduce((acc, cur, idx) => acc + cur * arr2[idx][j],                  0));
        }
        answer.push(tmp)
    }
    return answer;
}