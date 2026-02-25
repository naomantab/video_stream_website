function getLarger (a,b){
    if (a>b) {
        return a
    } else {
        return b
    }
}

console.log(getLarger(6,5))

const getBig = (a,b) => {
        if (a>b) {
        return a
    } else {
        return b
    }}

 

console.log(getBig(6,15))   

const square = a => a **2

console.log(square(4))

// challenge 3 //

function farewell(name){
    console.log("Goodbye forver "+name)
}

farewell("bob")

function greeting(name){
    return `nice to meet you ${name}`
}

console.log(greeting("bobster"))

// chalenge 4//

function state(start, stop, final){
    for (let i = start; i >= stop; i--){
        console.log(i)
    }
    console.log(final)
}

state(10,1,"Blastoff!!!")