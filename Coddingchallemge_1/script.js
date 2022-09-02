let average_dolphin;
let average_koalas;
const dolphin=(d_m1,d_m2,d_m3)=>{
     average_dolphin=(d_m1+d_m2+d_m3)/3;
    return average_dolphin;

}

const koalas =(k_m1,k_m2,k_m3)=>{
     average_koalas=(k_m1+k_m2+k_m3)/3;
    return average_koalas;

}
if (average_dolphin>average_koalas){
    document.write("Dol[phins teams is winner")

}
else if(average_dolphin<average_koalas){
    document.write("Koalas team is winner")
}
else
{
    document.write("drow the match");

}
dolphin(12,32,23);
koalas(34,43,45);