<button class="dark-mode-toggle" id="darkModeToggle">Toggle Dark Mode</button>
const darkModeToggle=document.getElementById('darkModetoggle');
darkModeToggle.addEventListener('click', () =>{
    document.body.classlist.toggle('dark-mode');
} );
const navToggle=document.querySelector('.nav-toggle');
const navMenu =document.getElementById('nav ul');
navToggle.addEventListener('click', function(){
    navMenu.classlist.toggle('active');
});