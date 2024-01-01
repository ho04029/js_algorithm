function solution(my_string) {
    const arr = my_string.split(" ");
    let answer = Number(arr[0]);
    for(let i = 2 ; i < arr.length ; i += 2){
        if(arr[i - 1] === "+") answer += Number(arr[i]);
        if(arr[i - 1] === "-") answer -= Number(arr[i])
    }
    return answer
}