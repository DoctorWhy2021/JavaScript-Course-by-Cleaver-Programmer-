//Get access to html
const billTotal = document.getElementById('billTotal');
const tipPers = document.getElementById('tipPers');
let pplAmount = document.getElementById('pplAmount');
const totalAmount = document.getElementById('totalAmount');

let pplNumb = parseInt(pplAmount.innerText);

//Increase amount of ppl
function addPpl(){
    pplNumb++;
    pplAmount.innerText = pplNumb.toString();
    totalPerPers();
}

//Decrease amount of ppl
function removePpl(){
    if (pplNumb > 1){
        pplNumb--;
        pplAmount.innerText = pplNumb.toString();
        totalPerPers();
    }
    alert("You can't have less than 1 person!")
}
//Calculation for total per person
const totalPerPers = () => {
    let bill = Number(billTotal.value);
    let tip  = Number(tipPers.value) / 100;
    totalAmount.innerText = ((bill + (bill * tip)) / pplNumb).toFixed(2);
}

