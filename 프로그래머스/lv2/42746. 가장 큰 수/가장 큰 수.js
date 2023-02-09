function solution(numbers) {
    let answer = numbers.sort((a, b) => {
        a = a.toString()
        b = b.toString();
        let tmp = []
        for(let i = 0 ; i < Math.min(a.length, b.length) ; i++){
            if(a[i] !==  b[i]) return b[i] - a[i];
            tmp.push(a[i])
        }
        
        let c = parseInt(a + b);
        let d = parseInt(b + a);
        return d - c;
        
        }).join("");
    
    let zero_check = answer.replaceAll("0", "");
    if(!zero_check) return "0";
    
    return answer
}