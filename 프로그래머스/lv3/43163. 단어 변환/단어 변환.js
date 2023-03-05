function solution(begin, target, words) {
    const visited = {[begin]: 0};
    const queue = [begin];
    
    while(queue.length){
        const cur = queue.shift();
        
        if(cur === target) break;
        
        for(let i = 0 ; i < words.length ; i++){
            if(isConnected(cur, words[i]) && !visited[words[i]]){
                visited[words[i]] = visited[cur] + 1;
                queue.push(words[i])
            }
        }
    }
    
    return visited[target] ? visited[target] : 0
}

const isConnected = (str1, str2) => {
    let cnt = 0; 
    for(let i = 0 ; i < str1.length ; i++){
        if(str1[i] !== str2[i]) cnt++;
    }
    
    return cnt === 1 ? true : false;
}