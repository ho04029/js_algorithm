function solution(k, score) {
    const answer = [];
    const fame = [];
    let min = 0;
    score.forEach(score => {
        if(fame.length < k){
            fame.push(score);
        } else {
            if(score > min){
                fame.push(score)
                fame.sort((a, b) => parseInt(b) - parseInt(a));
                fame.pop();
            }
        }
        min = Math.min(...fame);
        answer.push(Math.min(...fame));
    })
    return answer;
}