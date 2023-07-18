function solution(ineq, eq, n, m) {
    if(eq === "!"){
        if(ineq === ">") return Number(n > m);
        return Number(n < m);
    }
    if(ineq === ">") return Number(n >= m);
    return Number(n <= m);
}