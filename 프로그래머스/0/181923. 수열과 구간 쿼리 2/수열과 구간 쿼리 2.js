function solution(arr, queries) {
    var answer = [];
    for(let i = 0 ; i < queries.length ; i++){
        const newArr = arr.slice(queries[i][0], queries[i][1] + 1);
        const filtered = newArr.filter(num =>  num > queries[i][2]);
        if(filtered.length === 0) answer.push(-1);
        else answer.push(Math.min(...filtered));
    }
    return answer;
}