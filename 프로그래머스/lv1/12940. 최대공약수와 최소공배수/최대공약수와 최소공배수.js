function solution(n, m) {
    const GCD = [];
    const LCD = [];
    for(let i = 1 ; i <= Math.min(n, m) ; i++){
        if(n % i === 0 && m % i === 0){
             GCD.push(i)
        }
    }
    
    for(let i = Math.max(n, m) ; i <= n * m ; i++){
        if(i % n === 0 && i % m === 0){
            LCD.push(i)
        }
    }
    
    
    return [Math.max(...GCD), Math.min(...LCD)];
}