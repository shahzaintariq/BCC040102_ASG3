// task 9 

var num = [24, 53, 78, 91, 12];
numlarge = num[0];
for(i=0; i<num.length; i++){
    if(num[i] > numlarge){
        numlarge = num[i];
    }
}
alert(numlarge);

