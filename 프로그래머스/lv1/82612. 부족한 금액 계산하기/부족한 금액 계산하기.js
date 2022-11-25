function solution(price, money, count) {
    let total = price;
    for(let i = 2 ; i <= count ; i++){
        total += price * i
    }
    if(total - money <= 0){
        return 0
    }
    return total - money ;
}