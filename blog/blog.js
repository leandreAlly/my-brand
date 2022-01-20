
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


    