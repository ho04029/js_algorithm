function solution(s) {
    s = s.replace(/{/g, "").replace(/}/g, "").split(",");
    let sort = {};
    for(let i = 0 ; i < s.length ; i++){
        if(sort[s[i]]) sort[s[i]]++;
        else sort[s[i]] = 1;
    }
    return Object.keys(sort)
        .sort((a, b) => sort[b] - sort[a])
        .map(cur => cur * 1);
}