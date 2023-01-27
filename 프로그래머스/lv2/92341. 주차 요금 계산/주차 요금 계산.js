function solution(fees, records) {
    let sorted_records = records
        .sort((a,b) => parseInt(b.split(" ")[1]) - parseInt(a.split(" ")[1]))
    
    let car = {}
    
    for(let i = records.length - 1 ; i >= 0 ; i--){
        let out_time;
        let in_time;
        let [time, car_num, state] = sorted_records[i].split(" ")
        if(state === "OUT"){
            out_time = new Date(`2023-01-01 ${time}`);
            in_time = new Date(`2023-01-01 ${sorted_records[i - 1].split(" ")[0]}`);
            i--;
        }else if(sorted_records[i].split(" ")[2] === "IN"){
            in_time = new Date(`2023-01-01 ${time}`);
            out_time = new Date("2023-01-01 23:59");
        }
        let rest_time = (out_time-in_time) / 1000 /60;
        car[car_num] ? car[car_num] += rest_time : car[car_num] = rest_time
    }
    
    let cost_arr = Object.entries(car).sort(([a],[b]) => a[0] < b[0] ? -1: 1 )
                    .map(item => {
                        let time = item[1]
                        return time < fees[0] ? fees[1] : fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
                    })
    return cost_arr
}