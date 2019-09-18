const looneyTunesChars = 
["Bugs Bunny", 
"Daffy Duck", 
"Tweety", 
"Sylvester", 
"Elmer Fudd",
 "Porky Pig", 
 "Taz"];

//console.log() the even-numbered items in the array using a conditional statement.
for (let i=0; i<looneyTunesChars.length; i++){
    if(i % 2 === 0){
        console.log(looneyTunesChars[i])
    }
}
//console.log() the even-numbered items in the array and the item with the index of 3 using a conditional statement.
for (let i=0; i<looneyTunesChars.length; i++){
    if(i % 2 === 0 || i === 3){
        console.log(looneyTunesChars[i])
    }
}

//console.log() the odd-numbered index items in the array using a conditional statement.
for (let i=0; i<looneyTunesChars.length; i++){
    if(i % 2 !== 0){
        console.log(looneyTunesChars[i])
    }
}