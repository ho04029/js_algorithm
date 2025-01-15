const parseTime = (string) => {
    const splitted = string.split(":");
    const sec = Number(splitted[0]) * 60 + Number(splitted[1]);
    return sec
}

const formatting = (number) => {
    return number < 10 ? `0${number}`: number
}

function solution(video_len, pos, op_start, op_end, commands) {
    const videoTime = parseTime(video_len);
    const posTime = parseTime(pos);
    const opStartTime = parseTime(op_start);
    const opEndTime = parseTime(op_end);
    let cur = posTime;
    if(cur >= opStartTime && cur <= opEndTime){
        cur = opEndTime;
    }
    for(let i = 0 ; i < commands.length ; i++){
        if(commands[i] === "next"){
            cur += 10;
            if(cur > videoTime){
                cur = videoTime
            }
        }else if(commands[i] === "prev"){
            cur-= 10
            if(cur < 0){
                cur = 0;
            }   
        }
        
        if(cur >= opStartTime && cur <= opEndTime){
            cur = opEndTime;
        }
    }
    const min = formatting(Math.floor(cur/60));
    const sec = formatting(cur%60);
    const answer = [min, sec].join(":")
    return answer;
}