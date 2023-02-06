function solution(numbers) {
    let answer = numbers.map(num => {
        if(num % 2 === 0) return num + 1;
        
        let num2 = num.toString(2).split("");
        let idx = num2.length - num2.lastIndexOf("0") - 1;
        return num + 2 ** idx - 2 ** (idx - 1);
    });
    return answer;
}