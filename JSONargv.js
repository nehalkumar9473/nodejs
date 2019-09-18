// const fs = require('fs')
// const book = {
//     title: 'Ego is The Enmey ',
//     author: 'Rayan Holidday'
// }

// const bookJSON = JSON.stringify(book); // It will convert the JSON Data into string
// console.log(bookJSON);


// const parseData = JSON.parse(bookJSON) // It will parse the JSON data
// console.log('Title :' + parseData.title) // parseData is an javascript Object
// console.log('Author :' + parseData.author)

// fs.writeFileSync('1-json.json', bookJSON)

// // console.log(dataBuffer)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.author)


const fs = require('fs')
const info = {
    name: 'ip',
    age: 25,
}



const dataBuffer = fs.readFileSync('1-json.json')

const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name = 'Iron Man'
user.age = '26'
debugger
const userJSON = JSON.stringify(user)

fs.writeFileSync('1-JSON.json', userJSON)
console.log(userJSON)