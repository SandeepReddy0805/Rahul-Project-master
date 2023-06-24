function register(e){
  e.preventdefault();
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let name = document.getElementById('name');
  let phone = document.getElementById('phone');
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    alert('User created');
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}