const fleche = document.getElementById('fleche');
const temps = gsap.timeline({ repeat: -1 });

temps.to(fleche, { y: '10vh', duration: 1, ease: 'slow.out' });
temps.to(fleche, { y: 0, duration: 1, opacity:0 , ease: 'power1.in' });

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
/*
gsap.to('.stars2', {
  scrollTrigger: 'stars2',
  y: '100%',
  duration: 2,
});*/
/*
gsap.to('.stars1', { 
    y: '100%',
    scrollTrigger: {
      scrub: true,
      markers: true,
      start: 'top 0',
      end: 'bottom 25%',
      trigger: '.stars1',
    }
  })*/

gsap.to('.stars2', { 
y: '100%',
scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0',
    end: 'bottom 15%',
    trigger: '.stars2',
}
})
    
gsap.to('.stars3', { 
y: '100%',
scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0',
    end: 'bottom 35%',
    trigger: '.stars3',
}
})
    
gsap.to('.header.stars4', { 
y: '100%',
scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0',
    end: 'bottom 25%',
    trigger: '.stars4',
}
})

gsap.to('#Deep_Space.stars4', { 
    y: '100%',
    scrollTrigger: {
        scrub: true,
        markers: true,
        start: 'top 0',
        end: 'bottom 25%',
        trigger: '.stars4',
    }
    })
    
gsap.to('.stars5', { 
y: '50%',
scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0',
    end: 'bottom 0',
    trigger: '.stars5',
}
})
    
gsap.to('.pod', { 
    opacity:1 ,
    scrollTrigger: {
        scrub: true,
        start: 'top',
        end: 'bottom',
        trigger: '.titre',
    }
    })


gsap.to('.flamme', { 
    opacity:1,
    scrollTrigger: {
        scrub: true,
        markers: true,
        start: 'top',
        end: 'bottom 20%',
        trigger: '#orbit',
    }
    })



gsap.timeline().from(['.fleche-down'], {
    duration: 0.8,
    opacity: 0,
    repeat: -1,
    ease: 'slow',
    stagger: {
        each: 0.5,
    },
}).to('#chapitre1', {
    scrollTrigger: {
        markers: true,
        scrub: 1,
        trigger: '#Deep_Space',
        start: 'top 0%',
        end: '200% 5%',
        pin: true,
    }
})


gsap.to(".stars3", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".stars3",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});