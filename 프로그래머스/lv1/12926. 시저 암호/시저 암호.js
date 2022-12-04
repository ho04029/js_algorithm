function solution(s, n) {
    const string = s.split("")
    for(let i = 0 ; i < string.length ; i++){
        if(string[i] === " ") continue
        if(string[i].charCodeAt() + n > 122 ){
            string[i] = String.fromCharCode( string[i].charCodeAt() + n - 26)
            continue
        }
        
        if (string[i].charCodeAt() + n > "Z".charCodeAt() && 
        string[i].charCodeAt()>="A".charCodeAt() &&
           string[i].charCodeAt()<="Z".charCodeAt()){
            string[i] = String.fromCharCode("A".charCodeAt() + string[i].charCodeAt() + n - "Z".charCodeAt() -1)
            continue
        }
        
        string[i] = String.fromCharCode(string[i].charCodeAt() + n)
    }
    return string.join("")
}