function solution(lottos, win_nums) {
    let correct = 0;
    let zero = 0;
    for(let i of lottos){
        if(win_nums.includes(i)) correct++;
        if(i === 0) zero++
    }
    if(correct===0 && zero===0) return [6, 6]
    
    return [ 7 - correct - zero , correct ? 7 - correct : 6];
}