function isIsogram(str){
    var newArr = str.toLowerCase();
    var seen = [];
    for(var i = 0; i < newArr.length; i++) {
         if(seen.indexOf(newArr[i]) < 0) {
           console.log(newArr[i]);
               seen.push (newArr[i]);
         } else {
           return false;
         }
    }
    return true;

}

console.assert( isIsogram("Dermatoglyphics") );
console.assert( isIsogram("isogram") );
console.assert( isIsogram("aba") === false );
console.assert( isIsogram("moOse") === false );
console.assert( isIsogram("isIsogram") === false );
console.assert( isIsogram("") );  
