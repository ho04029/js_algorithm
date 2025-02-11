function solution(board) {
    var answer = 0;
    
    const checkChangeBoard = (a, b) => {
        if(a >= 0 && b >= 0 && a < board.length && b < board.length && board[a][b]!==1){
            board[a][b] = 2
        }
    }
    
    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0 ; j < board[i].length ; j++){
            if(board[i][j] === 1){
                checkChangeBoard(i-1, j-1);
                checkChangeBoard(i-1, j);
                checkChangeBoard(i-1, j+1);
                checkChangeBoard(i, j-1);
                checkChangeBoard(i, j+1);
                checkChangeBoard(i+1, j-1);
                checkChangeBoard(i+1, j);
                checkChangeBoard(i+1, j+1);
            }
        }
    }
    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0 ; j < board[i].length ; j++){
            if(board[i][j] === 0){
                answer++;
            }
        }
    }
    return answer;
}