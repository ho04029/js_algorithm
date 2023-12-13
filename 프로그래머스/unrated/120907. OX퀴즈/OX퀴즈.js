function solution(quiz) {
    quiz = quiz.map(cur => {
        let opResult
        const [op, ans] = cur.split("=");
        const opArr = op.split(" ");
        if(opArr[1] === "+") opResult = parseInt(opArr[0]) + parseInt(opArr[2]);
        else if(opArr[1] === "-") opResult = parseInt(opArr[0]) - parseInt(opArr[2]);
        return opResult === parseInt(ans) ? "O" : "X"
    });
    return quiz;
}