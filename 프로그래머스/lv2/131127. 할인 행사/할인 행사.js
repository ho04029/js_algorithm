function solution(want, number, discount) {
    let needs = {};
    want.forEach((item, idx) => needs[item] = number[idx]);
    
    let answer = 0;
    for(let i = 0 ; i < discount.length - 9 ; i++){
        let tmp = {...needs};
        let cur_discount = discount.slice(i, i + 10);
        for(let j of cur_discount){
            if(tmp[j]) tmp[j]--;
        }
        if(Object.values(tmp).reduce((acc, cur) => acc + cur, 0) === 0)
            answer++
    }
    return answer;
}