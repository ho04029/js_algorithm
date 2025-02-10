const strToObj=(str) => {
    const obj = {};
    let length = 0;
    for(let i = 0 ; i< str.length - 1 ; i++){
        const char1 = str[i];
        const char2 = str[i+1];
        if(/[a-zA-Z]/.test(char1) && /[a-zA-Z]/.test(char2)){
            const newString = [char1, char2].join("").toLowerCase();
            obj[newString] ? obj[newString]++ : obj[newString] = 1;
            length++;
        }
    }
    return [obj, length]
}

function solution(str1, str2) {
    const [obj1, length1] = strToObj(str1);
    const arr1 = Object.keys(obj1)
    const [obj2, length2]= strToObj(str2);
    
    let intersection = 0;
    
    for(let i = 0 ; i < arr1.length ; i++){
       if(obj2[arr1[i]]){
           if(obj2[arr1[i]] < obj1[arr1[i]]) {
               intersection += obj2[arr1[i]]
           }else{
               intersection += obj1[arr1[i]]
           }
       }
    }
   
    const union = length1 + length2 - intersection
    if(union === 0) return 65536;
    return Math.floor(intersection / union * 65536);
}