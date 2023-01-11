function solution(answers) {
    const way1 = [1, 2, 3, 4, 5];
    const way2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const way3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let correct = [0, 0, 0];
    for(let i = 0 ; i < answers.length ; i++){
        if(answers[i] === way1[i%way1.length]) correct[0]++;
        if(answers[i] === way2[i%way2.length]) correct[1]++;
        if(answers[i] === way3[i%way3.length]) correct[2]++;
    }
    let maxScore = Math.max(...correct);
    let answer = [];
    if(correct[0] === maxScore) answer.push(1);
    if(correct[1] === maxScore) answer.push(2);
    if(correct[2] === maxScore) answer.push(3);
    return answer;
}