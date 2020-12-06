var favoritePlaces = [
    "Biratnagar",
    "Lalitpur",
    "Patan",
    "Kathmandu",
    "Pokhara",
    "Palpa",
];
console.log(favoritePlaces);

favoritePlaces.push("Bhairahawa", "Illam");
var ktmSplice = favoritePlaces.splice(3, 1);
var varOfLength = favoritePlaces.length;
console.log(varOfLength);

favoritePlaces.forEach(function (value) {
    console.log(value);

});


