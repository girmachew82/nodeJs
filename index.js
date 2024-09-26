const os = require('os')
const fs = require('fs')

const cpuInfo = os.cpus();
//console.log(os.cpus())
(async () =>{
            try{
            if(fs.existsSync('cpu.txt')){
                const data = await fs.promises.readFile('cpu.txt')
                console.log(data.toString())
            }else{
            await fs.writeFile('cpu.txt',JSON.stringify(cpuInfo))
            }
            }catch(error){
                console.log(error)
            }
})();
