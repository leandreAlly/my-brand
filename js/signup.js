
const username = document.getElementById('user-name');
const email = document.getElementById('user-email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const signBtn = document.getElementById('sign-btn');


username.addEventListener("blur", validateUserName);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
password2.addEventListener("blur", validatePassword2);


function validateUserName() {
    const usernameValue = username.value.trim();
    if(usernameValue === '') {
       setError(username, 'Username is required');
     } else if(usernameValue.length < 5 || usernameValue.length > 25){
       setError(username, 'Your name must be between 5 and 25 letters');
     }else {
       setSuccess(username);
   }
}

function validateEmail() {
    const emailValue = email.value.trim();
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
}

function validatePassword() {
    const passwordValue = password.value.trim();
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 3 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
}
function validatePassword2() { 

    const password2Value = password2.value.trim();

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== password2Value) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
    
}

document.querySelector("#sign-btn").addEventListener("click", 
(e) => {
   
     e.preventDefault();

     validateForm();
    
});

function validateForm() {

    const inputs = document.querySelectorAll("form input");

      console.log(inputs);

    if(username.classList.contains('success') && 
       email.classList.contains('success') &&
       password.classList.contains('success') &&
       password2.classList.contains('success')
       ){
         document.querySelector("form").submit();
        } else{
             alert("validate all fields");
           return;
         }

}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return re.test(String(email).toLowerCase());
}






























// signBtn.addEventListener('click', (e) => {

//      validateSignUp();
    
//      const inputs = document.querySelectorAll("form input");

//      console.log(inputs);
    

//         let users = localStorage.getItem("users");

//         let myObject = {
//             name : username.value,
//             id :  Math.floor(Math.random() * 1000000),
//             email: email.value,
//             password: password.value
//         }

//         console.log(myObject)

//         if (users == null) {
//             userObj = [];
//         } else {
//             userObj = JSON.parse(users);
//         }
    
//         userObj.push(myObject);
    
//         const dataSaved = localStorage.setItem("users", JSON.stringify(userObj));

//         if(dataSaved){
//          console.log("sent");

//         }
   
 
     
 
// });

// // function isFormValid(){
// //     const inputContainers = form.querySelectorAll(".input_box");
// //     let result = true;
// //     inputContainers.forEach((container)=>{
// //         if(container.classList.contains('error')){
// //             result = false;
// //         }
// //     });
// //     return result;
// // }





// const validateSignUp = () => {
//     const usernameValue = username.value.trim();
//     
//     
//     
  
//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else if(usernameValue.length < 5 || usernameValue.length > 25){
//         setError(username, 'Your name must be between 5 and 25 letters');
//     }else {
//         setSuccess(username);
//     }






//     return true;
// };