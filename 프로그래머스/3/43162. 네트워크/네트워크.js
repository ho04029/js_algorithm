const dfs = (computers, start) => {
        const stack = [start];
        const result = {};
        const visited = {};
        let currentVertex;

        visited[0] = true;
        while(stack.length > 0){
            currentVertex = stack.pop();
            result[currentVertex] = true;

            computers[currentVertex].forEach((cur, idx) => {
               if(!visited[idx] && cur===1){
                   visited[idx] = true;
                   stack.push(idx);
               } 
            });
        }
        return result;
    }

function solution(n, computers) {
    var answer = 0;
    let result = {};
    while(Object.keys(result).length !== n){
        let start;
        for(let i = 0 ; i < n ; i++){
            if(!result[i]) {
                start = i;
                break;
            }
        }
        if(start === undefined) start = 0;
        const curResult = dfs(computers, start);
        result = {...result, ...curResult}

        answer++;
    }

    
    return answer;
}