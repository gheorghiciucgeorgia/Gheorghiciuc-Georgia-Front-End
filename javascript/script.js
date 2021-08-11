// Get the modal
var modal = document.getElementById('id01');


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//the toogle password icon
//when you click on the eye to show you the password
const tooglePassword=document.querySelector('#togglePassword');
const password=document.querySelector('#password');
//we took the elements in some variables

//we must attach an event listener to the togglePassword icon and toggle the type attribut of the password field
tooglePassword.addEventListener('click',function(e){
    //toggle the type attribute
    const type=password.getAttribute('type')=='password' ? 'text' : 'password';

    password.setAttribute('type', type);
});
