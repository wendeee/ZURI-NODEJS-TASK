//import https module
const https = require('https')

//import fs module
const fs = require('fs')

const url = 'https://jsonplaceholder.typicode.com/posts';

//Use https get method to fetch data
https.get(url, res =>{
    let data = '';
    res.on('data', chunk => {
        data += chunk
    })
    res.on('end', () => {
        (data)
        fs.writeFile('result/posts.json', data, (err) => {
            if(err) throw err
            console.log('File added successfully')
        })  
    })  
}).on('error', err => {
    console.log(err.message)
})




