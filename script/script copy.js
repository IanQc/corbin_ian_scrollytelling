
 const fleche = document.getElementById('fleche');
 const temps = gsap.timeline({ repeat: -1 });
 
 temps.to(fleche, { y: '10vh', duration: 1, ease: 'slow.out' });
 temps.to(fleche, { y: 0, duration: 1, opacity:0 , ease: 'power1.in' });


 const body = document.querySelector('body');
