function solution(arr) {
    var stk = [];
    let i = 0;
    while(i < arr.length){
        if(stk.length === 0 || stk.at(-1) < arr[i] ){
            stk.push(arr[i]);
            i++;
            continue;
        }
        stk.pop();
    }
    return stk;
}