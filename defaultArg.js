const greeter = (name) => {
    console.log(name)
}

greeter('world')
greeter()


const name = 'hello'
const userAge = 28

const user = {
    name,
    age: userAge,
    'loaction': 'pune'
}

console.log(user)


// Object distructring

const product = {
    label: 'note book',
    prise: 50,
    qty: 40,
    stock: 200
}


const transiction = function(type, { stock, label }) {
    console.log(type, stock, label)
}

transiction('order', product)