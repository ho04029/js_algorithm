function solution(hp) {
    const j = parseInt(hp/5);
    const b = parseInt((hp - j * 5)/3)
    const i = (hp - j * 5 - b * 3)
    return j+b+i;
}