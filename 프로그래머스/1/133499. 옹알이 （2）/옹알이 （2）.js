function solution(babbling) {
    const pronciation = ["aya", "ye", "woo", "ma"]
    const possible = [];
    let repeat = 0;
    for(let i = 0 ; i < babbling.length ; i++){
        let char = babbling[i]
        for(let j = 0 ; j < pronciation.length ; j++){
            char = char.replaceAll(pronciation[j], "!")
        }
        char = char.replaceAll("!", "")
        if(char === "") possible.push(babbling[i]);
    }
    
    for(let i = 0 ; i < possible.length ; i++){
        for(let j = 0 ; j < pronciation.length ; j++){
            if(possible[i].includes(pronciation[j].repeat(2))) {
                repeat++;
                break;
            }
        }
    }
    return possible.length - repeat;
}