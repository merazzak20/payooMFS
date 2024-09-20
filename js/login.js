

document.getElementById('btnLogin').addEventListener('click', function(event){
    event.preventDefault();
    console.log(1);

    const phoneNumber = document.getElementById('phoneNumber');
    console.log(phoneNumber.value);
})