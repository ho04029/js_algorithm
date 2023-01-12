function solution(k, tangerine) {
    const sort_tangerine = Array(Math.max(...tangerine)).fill(0);
    for(let i = 0 ; i < tangerine.length ; i++){
        sort_tangerine[tangerine[i] - 1]++
    }
    sort_tangerine.sort((a,b) => b - a);
    let bag = 0;
    let answer = 0;
    let i = 0; 
    while(bag < k){
        bag += sort_tangerine[i];
        i++;
        answer++
    }
    return answer;
}