function solution(array) {
    const tmpArray = [...new Set(array)]
    const countArray = new Array(tmpArray.length).fill(0)
    for(let i = 0 ; i < tmpArray.length ; i++){
        for(let j = 0 ; j < array.length ; j++){
            if(tmpArray[i] === array[j]){
                countArray[i]++
            }
        }
    }
    
    const maxNum = Math.max(...countArray)
    const maxNumIdx = countArray.indexOf(maxNum)
    for(let i = 0 ; i < countArray.length ; i++){
        if(countArray[i] === maxNum){
            let idx = i
            if(i !== maxNumIdx){
                return -1
            }
        }
    }
    return tmpArray[maxNumIdx];
}