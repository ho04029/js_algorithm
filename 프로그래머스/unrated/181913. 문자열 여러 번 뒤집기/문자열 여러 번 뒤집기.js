function solution(my_string, queries) {
    for(let i = 0 ; i < queries.length ; i++){
        const first = my_string.slice(0, queries[i][0]);
        const second = my_string.slice(queries[i][0], queries[i][1] + 1).split("").reverse().join("");
        const last = my_string.slice(queries[i][1] + 1, my_string.length);
        my_string = [first, second, last].join("")
    }
    return my_string;
}