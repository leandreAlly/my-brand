
// Login Validation
const userEmail= document.querySelector("#input-email");
const inpPassword = document.querySelector("#input-password");
const logBtn = document.querySelector("#log-btn");

logBtn.addEventListener("click", (e) => {

    const isValidLogin = validateLogin();

    if(isValidLogin){
        // Do stuff
    }

    e.preventDefault();

});

const setError = (element, message) => {
    const inputBox= element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');
  
    errorDisplay.innerText = message;
    inputBox.classList.add('error');
    inputBox.classList.remove('success')
  }
  const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');
  
    errorDisplay.innerText = '';
    inputBox.classList.add('success');
    inputBox.classList.remove('error');
  }
  const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validateLogin = () => {
    const uEmail = userEmail.value.trim();
    const inptPassword = inpPassword.value.trim();
  
    if(uEmail === '') {
        setError(userEmail, 'Email is required');
      } else if (!isValidEmail(uEmail)) {
          setError(userEmail, 'Provide a valid email address');
      } else {
          setSuccess(userEmail);
      }
  
  
    if(inptPassword === ""){
      setError(inpPassword, 'Password is required');
    } else if (inptPassword.length < 8 || inptPassword.length > 16){
      setError(inpPassword, 'Your password must be between 8 and 16 characters');
    }else{
      setSuccess(inpPassword);
    }
  
  };