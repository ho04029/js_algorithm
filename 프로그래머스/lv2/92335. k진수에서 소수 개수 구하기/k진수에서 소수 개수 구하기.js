function solution(n, k) {
    let trans = n.toString(k).split("0").filter(num => num !== '1' && num !== '')
    .map(num => num * 1);
    const answer = []
    for(let num of trans){
        let isPrime = true;
        for(let i = 2 ; i <= num ** 0.5 ; i++){
            if(num % i === 0) isPrime = false;
        }
        if(isPrime) answer.push(num);
    }
    return answer.length;
}