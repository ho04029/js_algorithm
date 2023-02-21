function solution(topping) {
    let answer = 0,
        bro1 = new Map(),
        bro2 = new Set();
    
    for(let i = 0 ; i < topping.length ; i++){
        if(bro1.has(topping[i])){
            let cur = bro1.get(topping[i]);
            cur.val++;
        }else{
            bro1.set(topping[i], {val: 1});
        }
    }
    
    for(let i = 0 ; i < topping.length ; i++){
        bro2.add(topping[i]);
        let cur = bro1.get(topping[i]);
        cur.val--;
        if(cur.val === 0) bro1.delete(topping[i]);
        if(bro1.size === bro2.size) answer++;
    }
    
    
    return answer;
}