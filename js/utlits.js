function setText(elementId){
   const element = document.getElementById(elementId);
   const topElemnt = element.innerText;
   console.log(topElemnt);
   const getLock = document.getElementById('getlock');
   getLock.innerText = topElemnt;
   
   // const takaOF = document.getElementById('taka');
   // const takaDot = takaOF.innerText;
   
   // const badtTaka = document.getElementById('amount');
   // badtTaka.innerText = takaDot;

   // const takBdt = document.getElementById('taka-bdt');
   // takBdt.innerText = takaDot;
  
}
// function setText1(elementId){
//    // const amount = 550;
//    const element1 = document.getElementById(elementId);
//    const topElemnt1 = element1.innerText;
//    console.log(topElemnt1);

//    const getLok = document.getElementById('getLoc');
//    getLok.innerText = topElemnt1;

//    // const takaOF = document.getElementById('taka');
//    // const taka = takaOF.innerText;
//    // const convert = parseInt(taka);
//    // const busFee = convert + amount;
//    // console.log(busFee);
   
//    // const badtTaka = document.getElementById('amount');
//    // badtTaka.innerText = busFee;
//    // console.log(busFee);

//    // const takBdt = document.getElementById('taka-bdt');
//    // takBdt.innerText = busFee;
    
// }
function colorCode(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('bg-green-500');
}
function setText2(elementId){
   // const amount = 550;
   const element2 = document.getElementById(elementId);
   const topElemnt2 = element2.innerText;
   console.log(topElemnt2);

   const getLok1 = document.getElementById('getLoc');
   getLok1.innerText = topElemnt2;

   // const takaOF2 = document.getElementById('taka');
   // const taka2 = takaOF2.innerText;
   // const convert2 = parseInt(taka2);
   // const busFee2 = convert2 + amount;
   // console.log(busFee2);
   
   // const badtTaka2 = document.getElementById('amount');
   // badtTaka2.innerText = busFee2;
   // console.log(busFee2);

   // const takBdt2 = document.getElementById('taka-bdt');
   // takBdt2.innerText = busFee2;
    
}
function countSit(){
   const dop = document.getElementById('sitNo');
   const doped = dop.innerText;
   const totalSit = doped - 1;
   dop.innerText = totalSit
}
function superSit(){
   const superSit = document.getElementById('super');
   const getSit = superSit.innerText;
   const convertSit = parseInt(getSit);
   const superCount = convertSit + 1;
   superSit.innerText = superCount;
   
}
function totalAmount(){
   const amount = document.getElementById('amount');
   const passengerNo = amount.innerText;
   const convertPassenger = parseInt(passengerNo);
   const totalAmount = convertPassenger + 550;
   amount.innerText = totalAmount;

   const totalTaka = document.getElementById('taka-bdt');
   totalTaka.innerText = totalAmount;
   
}
