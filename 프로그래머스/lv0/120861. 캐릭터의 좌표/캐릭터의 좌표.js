function solution(keyinput, board) {
    const answer = [0, 0]
    for(let i = 0 ; i < keyinput.length ; i++){
        if(keyinput[i] === "left"){
            if(answer[0] > Math.floor(board[0] / 2) * -1)
            answer[0]--
        }else if(keyinput[i] === "right"){
            if(answer[0] < Math.floor(board[0] / 2))
            answer[0]++
        }else if(keyinput[i] === "down"){
            if(answer[1] > Math.floor(board[1] / 2) * -1)
            answer[1]--
        }else if(keyinput[i] === "up"){
            if(answer[1] < Math.floor(board[1] / 2))
            answer[1]++
        }
    }
    return answer;
}