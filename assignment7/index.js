

 let lucasHeight= 1.95;
 let lucasWeight= 1.09;


 let johnHeight = 1.95
 let johnWeight = 92

 lucasBMI=lucasWeight/(lucasHeight**2);
 johnBMI= johnWeight/(johnHeight**2);

 let lucasHigherBMI=lucasBMI > johnBMI;
 console.log(lucasHigherBMI);

 if(lucasHigherBMI === true){
     console.log('Lucas BMI is higher than john')
 }
 else{
     console.log('john BMI is higher than Lucas')
 }