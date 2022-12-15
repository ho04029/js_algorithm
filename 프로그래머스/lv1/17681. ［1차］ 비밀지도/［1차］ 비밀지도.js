function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0 ; i < arr1.length ; i++){
        let num1 = [];
        let num2 = [];
        for(let j = 0 ; j < n ; j++){
            num1.push(arr1[i] % 2);
            num2.push(arr2[i] % 2);
            arr1[i] = Math.floor(arr1[i]/2);
            arr2[i] = Math.floor(arr2[i]/2);
        }
        let num3 = []
        for(let j = 0 ; j < n ; j++){
            (num1[j] === 0 && num2[j] === 0) ? num3.push(" ") : num3.push("#")
        }
        answer.push(num3.reverse().join(""))
    }
    return answer;
}