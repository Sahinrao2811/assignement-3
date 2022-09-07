const name="SDFG";

const number=["s",2,"32","hello","Ram","celestail" , name]
const arr=[1,4,5,6,7,8,9,3]
// console log array
console.log(number);
// calculate the length of the array
console.log(`length of the array--${number.length}`);
//last valus of the index
console.log(number[number.length-1]);
// console log 4the position value
console.log(number[4]);
// travesing the array
for(let temp in number){
    console.log(`index ${temp}`);
}
for(let temp of number)
{
    console.log(`the value of the array is:> ${temp}`)
}
// add an element to the end of the array 
number.push("rao");
console.log(number);
// removing an element from the end of the array
number.pop();
console.log(number);
// remove an element to starting of the array
number.shift("rao");
console.log(number)
// rADD a element to starting of the array
number.unshift("fghjkl");
console.log(number);
// cocataton of the array
const com =number.concat(arr);
console.log(com);



