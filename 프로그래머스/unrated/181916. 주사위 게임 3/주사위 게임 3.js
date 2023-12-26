function solution(a, b, c, d) {
    const arr = [a,b,c,d];
    const obj = {};
    for(let i = 0 ; i < arr.length ; i++){
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }
    let length = Object.keys(obj).length;
    if( length === 1) return a * 1111;
    if(length === 4) return Math.min(...arr);
    if(length === 3) {
        const score = [];
        for(let i = 0 ; i < arr.length ; i++){
            if(obj[arr[i]] === 1) score.push(arr[i])
        }
        return score[0] * score[1]
    }
    if(obj[a] === 2){
        const p = Object.keys(obj)[0] * 1;
        const q = Object.keys(obj)[1] * 1;
        return (p + q) * Math.abs(p - q)
    }
    let p = 0;
    let q = 0;
    if(Object.values(obj)[0] === 1){
        p = Object.keys(obj)[1] * 1;
        q = Object.keys(obj)[0] * 1;
    }else{
        p = Object.keys(obj)[0] * 1;
        q = Object.keys(obj)[1] * 1;
    }
    return Math.pow((10 * p + q), 2)
}