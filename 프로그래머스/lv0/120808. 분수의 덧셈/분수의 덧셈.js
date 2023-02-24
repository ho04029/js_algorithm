function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1,
        denom = denom1 * denom2;
    let tmp = 1;
    
    for(let i = 1 ; i <= Math.min(numer, denom) ; i++){
        if(numer % i === 0 && denom % i ===0) tmp = i;
    }
    return [numer / tmp , denom / tmp];
}