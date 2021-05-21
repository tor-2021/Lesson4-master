// Lesson 4 - Assignment 2: Random Address Generator
// Write a script that can generate random addresses
// As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
// Your script should randomly select one item from each of these arrays and then use them to construct a random address
// Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
// node random-address.js
// => 34578 Dolphin Street, Wonka NY, 44506

var streetNum = [234, 5664, 22, 43];
var street = ["Marwood Place", "Bay St", "Younge St", "Bloor St"];
var city = ["Toronto", "Maple", "Vancouver", "Montreal"];
var zipCode = ["M3A2C4", "M4A3B6", "M5A7M9", "M6A2S3"];
var address = [streetNum, street, city, zipCode];
//var r = 0;
for (let r = 0; r < 1; r++) {
  //  while (r < street.length) {
  // console.log("New Address: ", address + street);
  var randomAddress = Math.floor(Math.random() * address.length);
  //Math.floor(Math.random()*items.length)
  console.log("Random Address:");
  console.log(
    streetNum[randomAddress] +
      " " +
      street[randomAddress] +
      " " +
      city[randomAddress] +
      " " +
      zipCode[randomAddress]
  );
}
