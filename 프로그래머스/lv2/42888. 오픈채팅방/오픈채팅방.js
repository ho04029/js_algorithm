function solution(record) {
    var answer = [];
    const member = {}
    for(let i = 0 ; i < record.length ; i++){
        if(record[i].split(" ")[0] === "Enter" || record[i].split(" ")[0] === "Change"){
            member[record[i].split(" ")[1]] = record[i].split(" ")[2];
        }
    }
    
    for(let i = 0 ; i < record.length ; i++){
        let name = member[record[i].split(" ")[1]]
        if(record[i].split(" ")[0] === "Enter"){
            answer.push(`${name}님이 들어왔습니다.`);
        } else if(record[i].split(" ")[0] === "Leave"){
            answer.push(`${name}님이 나갔습니다.`);
        } 
    }
    return answer;
}