// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// Contact Form Validation Form 
const submitName = document.querySelector("#submit-name");
const submitEmail = document.querySelector("#submit-email");
const submitMessage = document.querySelector("#submit-message");
const form = document.querySelector("#send-message");
const suBtn = document.querySelector("#myBtn")
// const erMsg = document.querySelector("#error-message");


suBtn.addEventListener('click', (e) => {


  const isFormValid = validateInputs();

 if(isFormValid){
  
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
const validateInputs = () => {
  const subName = submitName.value.trim();
  const subEmail = submitEmail.value.trim();
  const subMessage = submitMessage.value.trim();


  if(subName === '') {
      setError(submitName, 'Your Name is required');
  }else if(subName.length < 5 || subName.length > 25){
     setError(submitName, 'Your name must be between 5 and 25 letters');
  }else {
      setSuccess(submitName);
  }


  if(subEmail === '') {
      setError(submitEmail, 'Email is required');
    } else if (!isValidEmail(subEmail)) {
        setError(submitEmail, 'Provide a valid email address');
    } else {
        setSuccess(submitEmail);
    }


  if(subMessage === ""){
    setError(submitMessage, 'Message is required');
  } else if (subMessage.length < 10 || subMessage.length > 100){
    setError(submitMessage, 'Your message must be between 10 and 100 letters');
  }else{
    setSuccess(submitMessage);
  }

};


