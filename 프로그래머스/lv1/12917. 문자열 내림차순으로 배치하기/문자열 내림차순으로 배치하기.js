function solution(s) {
    return s.split("").sort((a, b) => {
        if(a.match(/[a-z]/g) && b.match(/[A-Z]/g)) return -1;
        if(b.match(/[a-z]/g) && a.match(/[A-Z]/g)) return 1;
        return a > b ? -1 : 1
    }).join("");
}