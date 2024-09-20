
document.getElementById('addMoneyButton').addEventListener('click',function(){
    document.getElementById('addMoneyForm').classList.remove('hidden');
    document.getElementById('cashOutForm').classList.add('hidden');

})


document.getElementById('btnAddMoney').addEventListener('click',function(event){
    event.preventDefault();

    const amount = document.getElementById('amountField').value;
    const pin = document.getElementById('pinField').value;
    const balance = document.getElementById('accountBalance').innerText;

    if(pin === '1234'){
        const newBalance = parseFloat(amount) + parseFloat(balance);
        document.getElementById('accountBalance').innerText = newBalance;
    }
    else{
        alert('Wrong pin number.');
    }
})