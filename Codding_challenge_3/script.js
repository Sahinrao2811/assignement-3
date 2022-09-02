let average_dolphine;
let avrage_koalsa;
const dolphin =(d_m1,d_m2,d_m3)=>{
 average_dolphine=(d_m1+d_m2+d_m3)/3;
//  document.write(`the avrage value of dolphin${average_dolphine} \n\ `);
 return average_dolphine;
}
const koalas =(k_m1,k_m2,k_m3)=>{
    avrage_koalsa=(k_m1+k_m2+k_m3)/3
    // document.write(`the average score of Koasla ${avrage_koalsa} \n\ `);
    return avrage_koalsa;

}
if (average_dolphine<2*avrage_koalsa)
{
    document.write(`the team of koalsa is winner`);

}
else if (2*average_dolphine>avrage_koalsa)
{
    document.write(`the team of dolphine is winner`);
}
else{
    document.write(`no'one winner`);
}
dolphin(12,23,4);
koalas(12,32,32);