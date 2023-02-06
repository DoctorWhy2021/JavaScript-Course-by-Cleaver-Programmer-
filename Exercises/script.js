const billTotal = document.getElementById('billTotal');
const tipPers = document.getElementById('tipPers');
let pplAmount = document.getElementById('pplAmount');
const totalAmount = document.getElementById('totalAmount');

let pplNumb = Number(pplAmount.innerText);
let bill = Number(billTotal.value);
let tip = Number(tipPers.value);

console.log(billTotal.innerText)
function addPpl(){
    pplNumb++;
    pplAmount.innerText = pplNumb.toString();
}

function removePpl(){
    if (pplNumb > 1){
        pplNumb--;
        pplAmount.innerText = pplNumb.toString();
    }
}
//Calculation for total per person
const totalPerPers = () => {

    totalAmount.innerText = (bill * (tip/100) / pplNumb).toString();
    console.log(bill)
}