function solution(n, words) {
    const answer = [0, 0];
    const talked = [words[0]];

    for(let i = 1 ; i < words.length ; i++){
        //앞사람이 말한 마지막 문자로 시작하는 단어를 말했고
        //이전에 등장하지 않았던 단어인 경우
        if(talked.at(-1).at(-1) === words[i][0] && !talked.includes(words[i])){
            talked.push(words[i]);
            continue;
        }
        answer[0] = (i % n) + 1;
        answer[1] = Math.floor(i / n) + 1;
        break;
    }

    return answer;
}