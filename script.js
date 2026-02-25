function number(num) {
    if (num > 11){
        console.log("High")
    } else if (num < 3) {
        console.log("Low")
    } else if (num === 7) {
        console.log("exact")
    }
    else{
        console.log("Medium")
    }
}

number(7) 


// while loop //

let counter = 0
while (counter < 10) {
    console.log(counter)
    counter++
}

// for loop //

for (let i = 0; i < 10; i++);
    for (let j = 0; j < 10; j++) {
        console.log(i, j)
    }



for (let i=1; i<=30; i++) {
    counter ++
    if (i < 10){
        console.log('A')
    }
    else if (i > 20){
        console.log('C')
    }
    else{
        console.log('B')}
}