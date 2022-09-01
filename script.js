function burger(petty, bun){
    if ( petty>=bun) // when the petty is greater or equal to than the bun 
    {
        document.write(bun);
    }
    // else if (petty>=bun)
    // {
    //     document.write(bun)
    // }
     else
     {
        document.write(petty);
     }
     return burger;
}
let petty=4;
let bun =3;
burger(petty,bun);
// document.write(va);