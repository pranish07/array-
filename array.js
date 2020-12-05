var favoritePlaces= ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];
console.log("the old best place : " + favoritePlaces);
{
    
var ktmSplice = favoritePlaces.splice(3,1);
var varOfLength= favoritePlaces.length;
console.log("The left favorite place :  " + favoritePlaces);
console.log("The removed place is " + ktmSplice );
console.log(varOfLength);
 
favoritePlaces.push("Bhairahawa", "Illam");
console.log("Added two places: " + favoritePlaces)
}


// }
// alert("now myoverall favorite places are " + varOfLength);
// ("the deleted city from my favorite place is " + ktmSplice + " It's just because of pollution ");a