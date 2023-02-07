function solution(genres, plays) {
    const cd = {};
    for(let i = 0 ; i < genres.length ; i++){
        cd[genres[i]] ? cd[genres[i]][0] += plays[i] : 
        cd[genres[i]] = [plays[i]];
        
        cd[genres[i]].push( [i, plays[i]]);
    }
    
    let tmp = Object.values(cd).sort((a,b) =>  b[0] - a[0]);
    let answer = tmp.map((genre) => {
        genre.shift();
        genre = genre.sort((a,b) =>  b[1] - a[1]).map(song => song[0]).slice(0, 2);
        return genre
    })
    
    return answer.flat();
}