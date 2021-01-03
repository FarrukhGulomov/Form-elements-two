function myView(){
var myPassId = document.getElementById('password-input');
var myTypeInp = myPassId.getAttribute('type');


if(myTypeInp === 'password' ){
myPassId.setAttribute('type' , 'text');
}
else{myPassId.setAttribute('type' , 'password');

}

}



