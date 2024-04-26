const fleche = document.getElementById('fleche');
const temps = gsap.timeline({ repeat: -1 });

temps.to(fleche, { y: '10vh', duration: 1, ease: 'slow.out' });
temps.to(fleche, { y: 0, duration: 1, opacity:0 , ease: 'power1.in' });

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(TextPlugin);

/*------------Intro------------ */ 

let timeline1 = gsap.timeline();


timeline1.to(".titreAnim", {
    delay: 1,
    duration: 2,
    ease: "slow.in",
    text: "Soldat de l'espace",
    fontFamily: "Hell",
    color:"#ffe436"
})
.to(".soustitre01", {
    duration: 2,
    ease: "power4",
    color:"#ffe436" ,
    text: "Projet scrollytelling créé dans le cadre du cours Optimisation Web - Intégration multimédia - Collège Montmorency."
}, "-=1")
.to(".soustitre02", {
    duration: 2,
    ease: "power4",
    color:"#ffe436" ,
    text: "© 2024 - Conception : Ian Corbin | Développement Web : Ian Corbin"
}, "-=1");

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
        trigger: '.comete',
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

let timeline2 = gsap.timeline();




gsap.to('.comete', { 
    opacity:1 ,
    x: "110vw", y:"90vh", ease:"none", duration:5,repeat: -1,
    repeat:-1,
    scrollTrigger: {
        start: 'top',
        end: 'bottom',
        trigger: '#DeepSpace',
        
    }
    })
/*
    gsap.to('.comete', { 
        x: "-110vw", y:"90vh", ease:"none", duration:5, rotation: 180,
        scrollTrigger: {
            start: 'top 50%',
            end: 'bottom',
            trigger: '#DeepSpace',
        }
        })
/*
gsap.fromTo('.comete', { y:"10vh"}, {x: "110vw", y:"90vh", repeat:-1, ease:"none", duration:5});
  */
gsap.fromTo('.nuage.quatre', {x: "250%"}, {x: "-600%", repeat:-1, ease:"power1.out", delay: 2 , duration:10});
gsap.fromTo('.nuage.six', {x: "200%"}, {x: "-600%", repeat:-1, ease:"power1.out", duration:14});
gsap.fromTo('.nuage.un', {x: "200%"}, {x: "-600%", repeat:-1, ease:"power1.out",delay: 4, duration:20});
gsap.fromTo('.nuage.neuf', {x: "200%"}, {x: "-600%", repeat:-1, ease:"power1.out", duration:15});
gsap.fromTo('.nuage.onze', {x: "200%"}, {x: "-800%", repeat:-1, ease:"power1.out",delay: 3, duration:15});
gsap.fromTo('.nuage.deux', {x: "-200%"}, {x: "600%", repeat:-1, ease:"power1.out", duration:10});
gsap.fromTo('.nuage.trois', {x: "-200%"}, {x: "600%", repeat:-1, ease:"power1.out", delay: 6, duration:14});
gsap.fromTo('.nuage.cinque', {x: "-300%"}, {x: "600%", repeat:-1, ease:"power1.out", duration:12});
gsap.fromTo('.nuage.huit', {x: "-400%"}, {x: "400%", repeat:-1, ease:"power1.out",delay: 2, duration:15});
gsap.fromTo('.nuage.dix', {x: "-200%"}, {x: "600%", repeat:-1, ease:"power1.out", duration:15});
gsap.fromTo('.nuage.douze', {x: "-200%"}, {x: "600%", repeat:-1, ease:"power1.out", delay: 3, duration:10});
gsap.fromTo('.nuage.treize', {x: "-200%"}, {x: "700%", repeat:-1, ease:"power1.out", duration:10});


gsap.fromTo('.oiseau.un', {x: "-200%"}, {x: "110vw", repeat:-1, ease:"power1.out", duration:8});
gsap.fromTo('.oiseau.deux', {x: "-200%"}, {x: "110vw", repeat:-1, ease:"power1.out", delay: 3, duration:5});
gsap.fromTo('.oiseau.trois', {x: "-200%"}, {x: "110vw", repeat:-1, ease:"power1.out", duration:10});
gsap.fromTo('.oiseau.quatre', {x: "-200%"}, {x: "110vw", repeat:-1, ease:"power1.out", delay: 1, duration:4});
gsap.fromTo('.oiseau.cinque', {x: "-200%"}, {x: "110vw", repeat:-1, ease:"power1.out", duration:9});