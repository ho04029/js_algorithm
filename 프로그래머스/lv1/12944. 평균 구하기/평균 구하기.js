function solution(arr) {
    return arr.reduce((arr,cur)=>{return arr+cur},0)/arr.length;
}