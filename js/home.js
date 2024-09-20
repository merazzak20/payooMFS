

document.getElementById('btnAddMoney').addEventListener('click',function( event){
    event.preventDefault();

    const amount = document.getElementById('amountField').value;
    const pin = document.getElementById('pinField').value;

    if(pin === '1234'){

    }
    else{
        alert('Wrong pin number.')
    }
})