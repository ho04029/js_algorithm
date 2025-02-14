function solution(elements) {
    const newElements = elements.concat(elements);
    
    const answer = new Set();
    
    for(let i = 0 ; i < elements.length ; i++){
        let num = 0;
        for(let j = 0 ; j < i+1 ; j++){
            num += newElements[j];
        }
        answer.add(num);
        for(let j = 1 ; j < elements.length ; j++){
            num -= newElements[j - 1];
            num += newElements[i + j];
            answer.add(num);
        }
    }
    
    return answer.size;
}