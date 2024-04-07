function solution(m, musicinfos) {
    let answer = '(None)';
    m = m.replace(/(C|D|F|G|A|B|E)#/g, (_, a) => a.toLowerCase());
    let cur_dur = 0;
    
    for(let i = 0 ; i < musicinfos.length ; i++){
        let [start, end, title, melody] = musicinfos[i].split(',');
        const [s_h, s_m] = start.split(':');
        const [e_h, e_m] = end.split(':');
        const time = (e_h - s_h) * 60 + (e_m - s_m);
        melody = melody.replace(/(C|D|F|G|A|B|E)#/g, (_, a) => a.toLowerCase());
        melody = melody.padEnd(time, melody).slice(0, time);
        
        if(melody.indexOf(m) >= 0 && cur_dur < time){
            cur_dur = time; 
            answer = title;
        }
    }
    
    return answer
}