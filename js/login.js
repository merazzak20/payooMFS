

document.getElementById('btnLogin').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    if(phoneNumber === '123' && password === '1234'){
        window.location.href ='/homepage.html';
    }
    else{
        alert('phone number or pin is wrong');
    }
})