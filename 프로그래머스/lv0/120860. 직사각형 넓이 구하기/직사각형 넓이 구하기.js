function solution(dots) {
    let tmp
    for(let i in dots){
        if(dots[0][0] !== dots[i][0] && dots[0][1] !== dots[i][1]){
            tmp = dots[i]
        }
    }
    return (Math.max(dots[0][0], tmp[0]) - Math.min(dots[0][0], tmp[0])) * (Math.max(dots[0][1], tmp[1]) - Math.min(dots[0][1], tmp[1]));
}