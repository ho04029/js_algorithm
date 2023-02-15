function solution(N, stages) {
    const fail_rate = [];
    let user = stages.length;
    
    for(let i = 1 ; i <= N ; i++){
        const leave = stages.filter(cur => cur === i).length;
        fail_rate.push([i, leave/user]);
        user -= leave;
    }
    
    return fail_rate.sort((a, b) => b[1] - a[1]).map(a => a[0]);
}