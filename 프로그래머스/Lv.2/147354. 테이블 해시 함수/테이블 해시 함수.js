function solution(data, col, row_begin, row_end) {
    let answer = '';
    data = data.sort((a, b) => {
        if(a[col - 1] === b[col - 1]) return b[0] - a[0];
        return a[col - 1] - b[col - 1];
    })
    
    for(let i = row_begin-1 ; i <= row_end-1 ; i++){
        const tmp = data[i].reduce((acc, cur) => acc + cur % ( i + 1 ),0);
        answer = answer !== '' ? answer ^ tmp : tmp;
    }
    
    return answer;
}