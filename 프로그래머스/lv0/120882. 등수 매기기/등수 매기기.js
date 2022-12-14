function solution(score) {
    const avg = score.map(item => (item[0] + item[1])/2);
    const avgSort = avg.slice().sort((a,b) => b - a);
    return avg.map(item => avgSort.indexOf(item) + 1);
}