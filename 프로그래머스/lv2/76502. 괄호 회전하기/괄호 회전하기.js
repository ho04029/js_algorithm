function solution(s) {
    var answer = 0;
    let tmp = s + s;
    for(let i = 0 ; i < s.length ; i++){
        let cur = tmp.slice(i, i + s.length);
        let cur_tmp = [cur[0]];
        for(let j = 1 ; j < cur.length ; j++){
            if(cur_tmp[cur_tmp.length - 1] === "(" && cur[j] === ")"){
                cur_tmp.pop();
                continue;
            }
            if(cur_tmp[cur_tmp.length - 1] === "{" && cur[j] === "}"){
                cur_tmp.pop();
                continue;
            }
            if(cur_tmp[cur_tmp.length - 1] === "[" && cur[j] === "]"){
                cur_tmp.pop();
                continue;
            }
            cur_tmp.push(cur[j]);
        }
        if(cur_tmp.length === 0) answer++
    }
    return answer;
}