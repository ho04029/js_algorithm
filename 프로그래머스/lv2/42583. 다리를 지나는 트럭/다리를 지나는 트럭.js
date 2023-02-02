function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const cur_bridge = []
    while(truck_weights.length > 0 || answer === 0 || cur_bridge.length > 0){
        if(cur_bridge.length === 0){
            cur_bridge.push([answer, truck_weights[0]]);
            truck_weights.shift();
            answer++;
            continue;
        }
        if(answer - cur_bridge[0][0] === bridge_length){
            cur_bridge.shift();
        }
        if(cur_bridge.length < bridge_length && 
           cur_bridge.reduce((acc, cur) => acc + cur[1], 0) + truck_weights[0] <= weight){
            cur_bridge.push([answer, truck_weights[0]]);
            truck_weights.shift();
        }
        
        answer++;
    }
    return answer;
}