function solution(board, moves) {
    const basket = [];
    let answer = 0;
    for(let i = 0 ; i < moves.length ; i++){
        let line = moves[i] - 1
        if(board[board.length - 1][line] === 0) continue;
        
        let doll = 0;
        for(let j = 0 ; j < board.length ; j++){
            if(board[j][line] === 0) continue;
            doll = board[j][line];
            board[j][line] = 0;
            if(basket[basket.length - 1] === doll){
                basket.pop();
                answer += 2
                break;
            }else{
                basket.push(doll)
                break;
            }
        }
        
        
    }
    return answer;
}