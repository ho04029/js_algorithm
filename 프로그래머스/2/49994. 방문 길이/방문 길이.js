function solution(dirs) {
    var answer = 0;
    const walk = {};
    let cur = [0, 0];
    for(let i = 0 ; i < dirs.length ; i++){
        const prev = [...cur]
        if(dirs[i] == 'U' && cur[1] < 5){
            cur[1]++;
        }else if(dirs[i] == 'L' && cur[0] > -5){
            cur[0]--;
        }else if(dirs[i] == 'D' && cur[1] > -5){
            cur[1]--;
        }else if(dirs[i] == 'R' && cur[0] < 5){
            cur[0]++;
        }
        const prevKey = prev.join("");
        const curKey = cur.join("");

        if (!walk[prevKey]) {
            walk[prevKey] = {};
        }
        if(!walk[curKey]) {
            walk[curKey] = {};
        }

        if (!walk[prevKey][curKey] && !walk[curKey][prevKey] && prevKey!== curKey) {
            walk[prevKey][curKey] = true;
            walk[curKey][prevKey] = true;
            answer++;
        }
    }
    return answer;
}