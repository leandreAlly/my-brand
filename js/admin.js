let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
}

const fromArticle = document.querySelector(".form-container");
const showfromArticleBtn = document.querySelector("#add-article");
const showDashbord = document.querySelector("#dashbord-show");

showfromArticleBtn.addEventListener('click', () => {
     fromArticle.style.display = "block"; 
});
showDashbord.addEventListener('click', () => {
  fromArticle.style.display = "none"; 
})
