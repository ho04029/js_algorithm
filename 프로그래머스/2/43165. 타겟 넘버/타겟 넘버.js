function solution(numbers, target) {
    const dfs = (i, sum) => {
        if(i === numbers.length){
            if(sum === target) return 1;
            return 0;
        }
        
        const add = dfs(i+1, sum + numbers[i]);
        const minus = dfs(i+1, sum - numbers[i]);
        return add + minus
    }
    
    return dfs(0, 0);
}