'use strick';
let according_to_15;
let according_to_20;
const retunrt_bill=(bill)=>
{
    if (300<=bill>=50)
    {
        according_to_15=(bill*15)/100;
        document.write(according_to_15);
    }
    else{
        according_to_20=(bill*20)/100;
        document.write(according_to_20);
    }

}
retunrt_bill(60);