// Code your solutions in this file
function writeCards(array, eventName ) {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
         newArray[index] = `Thank you, ${array[index]}, for the wonderful surprise gift!`;        
    }

    return newArray;
}


function countDown(n) {
    while(n >= 0){
        console.log(n);
        n--;
    }

}

