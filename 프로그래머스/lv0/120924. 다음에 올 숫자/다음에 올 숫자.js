function solution(common) {
    let common1 = common[common.length -1];
    let common2 = common[common.length -2];
    let common3 = common[common.length -3];
    if(common1 - common2 === common2 - common3){
        return common1 * 2 - common2;
    }
    return common1 ** 2 / common2;
}