function solution(participant, completion) {
    const name_list = {};
    participant.forEach((name) => {
        name_list[name] ? name_list[name]++ : name_list[name] = 1
    })
    completion.forEach((name) => {
        name_list[name]--;
    })
    return Object.keys(name_list).find(key => name_list[key] === 1);
}