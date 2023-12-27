function solution(survey, choices) {
    const total = {
        "RT": 0,
        "CF": 0,
        "JM": 0,
        "AN": 0,
    }
    for(let i = 0 ; i < survey.length ; i++){
        if(!total[survey[i]] && total[survey[i]] !== 0) {
            survey[i] = survey[i].split("").reverse().join("");
            choices[i] = 8 - choices[i];
        }
        if(choices[i] > 4) total[survey[i]] += choices[i] - 4;
        if(choices[i] < 4) total[survey[i]] -= 4 - choices[i];
    }
    let answer = ''
    for(let keys in total){
        if(total[keys] > 0){
            answer += keys[1]
        }else{
            answer += keys[0]
        }
    }
    return answer;
}