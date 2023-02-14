function solution(files) {
     return files.sort((a, b) => {
        let a_number = a.match(/[0-9]{1,}/g)[0];
        let b_number = b.match(/[0-9]{1,}/g)[0];
        let a_head = a.split(a_number)[0].toLowerCase();
        let b_head = b.split(b_number)[0].toLowerCase();
        
        if(a_head !== b_head) return a_head > b_head  ? 1 : -1;
        if(a_number !== b_number) return parseInt(a_number) - parseInt(b_number);
    });
}