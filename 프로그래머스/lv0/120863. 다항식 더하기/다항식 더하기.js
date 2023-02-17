function solution(polynomial) {
    const split = polynomial.split(" + ");
    const tmp = [0, 0];
    let answer = ''
    
    for(let i = 0 ; i < split.length ; i++){
        if(split[i].includes("x")){
            let num = split[i].match(/[0-9]/g);
            if(!num) num = 1;
            if(num.length > 1) num = num.join("");
            tmp[0] += parseInt(num);
        }else{
            tmp[1] += parseInt(split[i]);
        }
    }
    
    if(!tmp[0] && !tmp[1]) return '0'
    if(tmp[0] > 1) answer = `${tmp[0]}x`;
    if(tmp[0] === 1) answer = 'x';
    if(answer && tmp[1]) answer += ` + ${tmp[1]}`
    else if(!answer && tmp[1]) answer = `${tmp[1]}`
    return answer;
}