//import https module
const https = require('https')

//import fs module
const fs = require('fs')

const url = 'https://jsonplaceholder.typicode.com/posts';

//Use https get method to fetch data
https.get(url, res => {
    let data = '';
    res.on('data', chunk => {
        data +=chunk
    })
    res.on('end', () =>{
        (data)
        let dir = './result';
        if(fs.access(dir, (err)=>{
            console.log(`Directory ${err ? 'does not exist': 'exists'}`)
            fs.writeFile('result/posts.json', data, (err) => {
                if(err) throw err
                console.log('File written successfully')
            })
        })){

        }
    })
}).on('error', err => {
    console.log(err.message)
})