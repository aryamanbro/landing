function activateButton(element) {
  let buttons = document.querySelectorAll('.nav-link-custom');
  buttons.forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
  let page = element.innerText.split(" ").join("_");
 
  location.href = `${page}.html`;
  if(page==="Home"){
    location.href = `index.html`
  }
}

window.onscroll = function() { stickyNav() };
var navbar = document.getElementById("navi");
var sticky = navbar.offsetTop;
var navbarRightOffset=window.innerWidth - (navbar.offsetLeft + navbar.offsetWidth);
var navbarWidth = navbar.offsetWidth;
function stickyNav() {
  if ((window.scrollY || window.pageYOffSet) >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.right = navbarRightOffset + "px"; 
    navbar.style.width = navbarWidth + "px";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.right = "0"; 
    
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
      };
      if(!formData.name || !formData.email || !formData.message){
        alert("Some field is Empty !!")

      }
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      const isSuccess = emailRegex.test(formData.email);

      const feedbackElement = document.getElementById('formFeedback');
      if (isSuccess) {
          if (feedbackElement) {
              feedbackElement.textContent = 'Thank you for your message!';
          }
          document.getElementById('contactForm').reset();
          localStorage.setItem("formData",JSON.stringify(formData))
      let data=localStorage.getItem('formData');
      if(data){
        console.log(data);
      }
      } 


      
  });
});
