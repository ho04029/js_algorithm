const split = (arr, char) => {
    let splitted = [];
    for(i of arr){
        splitted.push(i.split(char))
    }
    return splitted.flat().filter(cur => cur!== '')
}

function solution(myStr) {
    var answer = [];
    const splitA = myStr.split("a");
    let splitB = split(splitA, "b");
    let splitC = split(splitB, "c")
    if(splitC.length === 0) return ["EMPTY"]
    return splitC;
}