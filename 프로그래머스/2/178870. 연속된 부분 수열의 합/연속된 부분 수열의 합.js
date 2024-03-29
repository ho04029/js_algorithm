function solution(sequence, k) {
    var answer = [];
    let right = 0,
        left = 0,
        cur = sequence[0],
        len = sequence.length;
    
    while(left <= right && right < sequence.length){
        if(cur < k){
            right++;
            cur += sequence[right];
            continue;
        }
        if(cur === k && len > right - left){
            answer = [left, right];
            len = right - left;
        }
        cur -= sequence[left];
        left++;
    }
    return answer;
}