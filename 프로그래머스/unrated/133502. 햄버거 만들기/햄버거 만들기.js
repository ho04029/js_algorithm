function solution(ingredient) {
    let answer = 0;
    const stack = [];
    let i = 0;
    while(i < ingredient.length){
        stack.push(ingredient[i]);
        i++;
        if(stack.length < 4) continue;
        if(stack.at(-1) === 1 && stack.at(-2) === 3 && 
           stack.at(-3) === 2 && stack.at(-4) === 1 ){
            for(let j = 0 ; j < 4 ; j++) stack.pop();
            answer++;
        }
    }
    
    return answer;
}