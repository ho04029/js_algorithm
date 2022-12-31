function solution(n,a,b)
{
    var answer = 0;
    let nums = Array(n).fill(0).map((num, idx) => idx+1);
    
    while(answer <= n){
        answer++
        let res = [];
        for (let i = 0; i < nums.length; i+=2) res.push(nums.slice(i, i+2));
        nums = [];
        for (let i of res){
            if(i.includes(a)&&i.includes(b)) return answer
            if(i.includes(a)) {
                nums.push(a);
                continue;
            }
            if(i.includes(b)) {
                nums.push(b);
                continue;
            }
            nums.push(i[0])
        }
    }
    
    return answer;
}