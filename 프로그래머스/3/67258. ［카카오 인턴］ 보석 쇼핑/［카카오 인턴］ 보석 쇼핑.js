function solution(gems) {
    const sort = new Set(gems).size;
    let answer = [0, 0]
    let min_length = Infinity;
    
    if(gems.length === sort) return [1, gems.length];
    
    let map = new Map().set(gems[0], 1);
    let right = 0;
    let left = 0;
    
    while(left < gems.length ){
        if(map.size === sort){
            if(right - left < min_length){
                min_length = right - left;
                answer = [left + 1, right + 1];
            }
            map.set(gems[left], map.get(gems[left]) - 1);
            if(map.get(gems[left]) === 0) map.delete(gems[left]);
            left++;
        }else{
            right++;
            if(right > gems.length - 1 ) break;
            const cur = map.get(gems[right]);
            map.set(gems[right], cur ? cur + 1 : 1);
        }
       
    }
    
    return answer;
}