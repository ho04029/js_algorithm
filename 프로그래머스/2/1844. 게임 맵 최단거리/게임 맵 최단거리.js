function solution(maps) {
    const n = maps.length;  
    const m = maps[0].length;  
    const queue = [[0, 0]];
    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    visited[0][0] = true; 

    while (queue.length) {
        const [y, x] = queue.shift();

        if (y === n - 1 && x === m - 1) {
            return maps[y][x]; 
        }

        for (let i in dx) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] === 1 && !visited[ny][nx]) {
                visited[ny][nx] = true;
                maps[ny][nx] = maps[y][x] + 1;
                queue.push([ny, nx]);
            }
        }
    }

    return -1; 
}
