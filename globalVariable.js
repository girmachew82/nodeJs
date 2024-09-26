// console.log(process)
// console.log(process.argv)
// console.log(process.env)
console.log(__dirname)
console.log(__filename)
const startTime = process.hrtime();
//console.log(startTime)
for(let i =0; i < 10; i++){}
const endTime = process.hrtime(startTime);
console.log("Time it took ",endTime[1]/1000000)