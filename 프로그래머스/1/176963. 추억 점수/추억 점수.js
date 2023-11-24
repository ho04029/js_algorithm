function solution(name, yearning, photo) {
    const score = {};
    const answer = [];
    for(let i = 0 ; i < name.length ; i ++){
        score[name[i]] = yearning[i];
    }
    for(let i = 0 ; i < photo.length ; i++){
        const arr = photo[i];
        let sum = 0;
        for(let j = 0 ; j < arr.length ; j++){
            if(score[arr[j]]) sum += score[arr[j]];
        }
        answer.push(sum)
    }
    return answer;
}