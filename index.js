const os = require('os')
const fs = require('fs')

const cpuInfo = os.cpus();
//console.log(os.cpus())
(async () =>{
            try{
                const filename = 'cpu.txt';


            if(fs.existsSync(filename)){
                const readableStream = fs.createReadStream(filename)
                readableStream.on('data',(chuck) =>{
                    console.log(chuck.toString())

                    readableStream.on('end', () => {
                        console.log('stream completed the reading')
                    })

                    readableStream.on('error', (error) =>{
                        console.log(error)
                    })
                })
                //console.log(data.toString())
            }else{
            await fs.writeFile('cpu.txt',JSON.stringify(cpuInfo))
            }
            }catch(error){
                console.log(error)
            }
})();
