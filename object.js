// Let'a user know which active page they are on
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll ('div a'). forEach(link =>{
    if(link.href.includes('\${activePage}')); {
       link.classList.add('active');
    }
})