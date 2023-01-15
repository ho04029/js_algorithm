function solution(food) {
    var answer = '';
    for(let i = 1 ; i < food.length ; i ++){
        let food_num = Math.floor(food[i]/2);
        answer = [...answer, ...Array(food_num).fill(i)]
    }
    return [...answer, 0, ...answer.reverse()].join("");
}