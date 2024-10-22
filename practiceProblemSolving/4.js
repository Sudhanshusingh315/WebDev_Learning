function myGcd(a,b){
    if(b==0) return a;
    return myGcd(b, a%b);
}
 

console.log(myGcd(2,99));