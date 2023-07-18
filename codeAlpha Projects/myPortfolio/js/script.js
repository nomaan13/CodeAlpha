let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll=() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal({
    distance:'60px',
    duration:2500,
    reset:true
})
sr.reveal('.home-text',{delay:200,oorigin:'top'})
sr.reveal('.home-img',{delay:400,oorigin:'top'})
sr.reveal('.about,.services,.cta,.resume,.contact,.copyright',{delay:200,origin:top})





// ##########################################################################################################

/*{ <script>
    document.querySelector('body').addEventListener('mousemove',eyeball);

    function eyeball(){
        const eye = document.querySelectorAll('.eye');
        eye.forEach(function(eye){
            let x= (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            let radin= Math.atan2(event.pageX - x , event.pageY - y);
            let rotattion = (radian * (180 / Math.PI) * - 1 ) + 270;
            eye.style.transform = "rotate("+rotattion+"deg)"
        } );
    }} */
// ###########################################################################################################
   