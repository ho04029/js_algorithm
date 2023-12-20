function solution(keymap, targets) {
    var answer = targets.map((str) => {
        let sum = 0
        for(let i = 0 ; i < str.length ; i++){
            let min = Infinity;
            const char = str[i]
            for(let j = 0 ; j < keymap.length ; j++){
                const idx = keymap[j].indexOf(char)
                if(idx !== -1 && idx < min) min = idx
            }
            if(min === Infinity) return -1
            sum += (min + 1)
        }
        return sum
    });
    return answer;
}