
    function showhide() {
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("toggle");
        var dots = document.getElementById("dots");
        var comment = document.querySelector(".comment-section");
        var sidebar = document.querySelector(".sidebar");
      
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
          comment.style.display = "none"
          sidebar.style.display = "block"
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less"; 
            moreText.style.display = "inline";
            comment.style.display = "block"
            sidebar.style.display = "none"
        }
      }

// Validate Comment Section

const userName = document.querySelector("#user-name");
const commentTexts = document.querySelector("#comment-field");
const subBtn = document.querySelector("#myBtn");


subBtn.addEventListener("click", (e) => {


  const isCommentValid =  validateComment();
  
  if (isCommentValid){
    // Do stuff
  }

  e.preventDefault();
});


const setError = (element, message) => {
  const commentSection= element.parentElement;
  const errorDisplay = commentSection.querySelector('.error');

  errorDisplay.innerText = message;
  commentSection.classList.add('error');
  commentSection.classList.remove('success')
}
const setSuccess = element => {
  const commentSection = element.parentElement;
  const errorDisplay = commentSection.querySelector('.error');

  errorDisplay.innerText = '';
  commentSection.classList.add('success');
  commentSection.classList.remove('error');
}

const validateComment = () => {
  const useName = userName.value.trim();
  const cmntText = commentTexts.value.trim();
 
  if(useName === '') {
      setError(userName, 'Your name is required');
  }else if(useName.length < 5 || useName.length > 25){
     setError(userName, 'Your name must be between 5 and 25 letters');
  }else {
      setSuccess(userName);
  }

  if(cmntText === ""){
    setError(commentTexts, 'Message is required');
  } else if (cmntText.length < 10 || cmntText.length > 30){
    setError(commentTexts, 'Your message must be between 10 and 50 letters');
  }else{
    setSuccess(commentTexts);
  }

};
// Comment validation end///