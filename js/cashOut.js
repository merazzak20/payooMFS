
document.getElementById('cashOutButton').addEventListener('click',function(){
    document.getElementById('cashOutForm').classList.remove('hidden');
    document.getElementById('addMoneyForm').classList.add('hidden');

})

document.getElementById('btnCashOut').addEventListener('click', function(event){
    event.preventDefault();

    const balance = document.getElementById('accountBalance').innerText;
    const amount = document.getElementById('cashOutAmountField').value;
    const pin = document.getElementById('cashOutPinField').value;

    if(pin === '1234'){
        const newBalance = parseFloat(balance) - parseFloat(amount);
        document.getElementById('accountBalance').innerText = newBalance;  
        alert('cash out successful') 
    }
    else{
        alert('cashout failed try again later');
    }
})