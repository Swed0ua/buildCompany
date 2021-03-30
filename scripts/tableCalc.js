let tr = document.querySelectorAll('table tr:not(:first-child)');
let total = 0;
let tableTotal = document.querySelector('.table__total');

document.addEventListener('change', () => {
    totalCalc();
})

function totalCalc() {
    total = 0;
    tr.forEach(element => {
        let checkBox = element.querySelector('input[type="checkbox"]').checked,
            quantity = element.querySelector('.quantity').value,
            price =  element.querySelector('.price').innerHTML,
            sum = element.querySelector('.sum');

       if (checkBox){
           let sumRow = Number(price * quantity);
           total += sumRow;
            sum.innerHTML = sumRow;
       } else {
            sum.innerHTML = 0;
       }
       tableTotal.innerHTML = total +"грн";
    });
}

setTimeout(totalCalc, 0);