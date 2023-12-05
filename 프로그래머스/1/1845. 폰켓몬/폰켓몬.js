function solution(nums) {
    const pocketmon = new Set();
    for(let i = 0 ; i < nums.length ; i++){
        pocketmon.add(nums[i]);
    }
    return pocketmon.size < nums.length / 2 ? pocketmon.size : nums.length / 2
}