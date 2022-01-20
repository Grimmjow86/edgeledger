const navbar = document.getElementById('navbar');

window.onscroll = function(){
    if(window.pageYoffset > 100){
        navbar.classList.remove('top');
        if(!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function() {
            
        }, 200);
    } else{
        navbar.classList.add('top');
    }
}