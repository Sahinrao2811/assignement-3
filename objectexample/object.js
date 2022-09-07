const car={
    color: "black",

    speed: 40,
    car_brand:" swift",
    moden:2000 ,
    calcutedifferencecurren:function(){
        return 2342-this.moden;
    }
}
// console log object
console.log(car);
// console log methode name
console.log(car.moden);
// console log methode
const mm=car.calcutedifferencecurren();
console.log(mm)
// upgrade the available property
const newobje = car.color="white";
console.log(newobje);
// delete property
const del=delete car.speed;
console.log(car);
// ADD the property 
car.fuil=12;
console.log(car);
