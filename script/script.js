gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);
/*
gsap.to(".oiseauMorph", {

    morphSVG:".poissonMorph",
    scrollTrigger: {
        trigger: '.oiseauMorp',
    }});*/
/*------------Intro------------ */ 

let timeline1 = gsap.timeline();


timeline1.to(".titreAnim", {
    delay: 1,
    duration: 2,
    ease: "slow.in",
    text: "Soldat de l'espace",
    fontFamily: "Hell",
    color:"#ffe436",
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
    
gsap.to('header .stars4', { 
y: '100%',
scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0',
    end: 'bottom 25%',
    trigger: '.stars4',
}
})

gsap.to('#Deep_Space .stars1', { 
    y: '5%',
    backgroundPosition: `50% ${-innerHeight / 2}px`,
    scrollTrigger: {
        scrub: true,
        markers: true,
        trigger: '#Deep_Space',
    }
    })
/*
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
    */
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
  
  function noActif() {
    body.classList.remove('is-scrolling');
  }
  const body = document.querySelector('body');
    
gsap.to('.pod', { 
    opacity:1 ,
    scrollTrigger: {
        scrub: true,
        start: 'top',
        end: 'bottom',
        trigger: '.titre',
 }});

            
gsap.to('.pod', { 
    scrollTrigger: {
        start: 'top',
        end: 'bottom',
        trigger: body,
        onUpdate: function(e) {
            if (e.direction == -1) {
              body.classList.remove('direction-down');
              body.classList.add('direction-up');
            }
            else if (e.direction == 1) {
              body.classList.add('direction-down');
              body.classList.remove('direction-up');
            }   
          }
        }});
   


    gsap.to('.flamme', { 
        opacity: 1,
        scrollTrigger: {
            scrub: true,
            markers: true,
            start: 'top',
            end: 'bottom 20%',
            trigger: '#orbit',
            onEnter: function() {
                document.querySelector('.flamme').style.animationPlayState = 'running';
            },
            onLeaveBack: function() {
                document.querySelector('.flamme').style.animationPlayState = 'paused';
            }
        }
    });
    
    gsap.to('.flamme', { 
        scrollTrigger: {
            start: 'top',
            end: 'bottom',
            trigger: body,
            onUpdate: function(e) {
                if (e.direction == -1) {
                  body.classList.remove('direction-down2');
                  body.classList.add('direction-up2');
                }
                else if (e.direction == 1) {
                  body.classList.add('direction-down2');
                  body.classList.remove('direction-up2');
                }
              }
            }});

    


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





// Ajout de l'animation à la timeline
gsap.timeline({scrollTrigger: {
    //scrub: true,
   //pin:true,
    //markers:true,
    trigger: "#Deep_Space", // Élément qui déclenche l'animation
    start: "top -40vh", 
    end: "bottom",
}})
.to('.comete', { 
    opacity: 1,
    x: "110vw",
    y: "90vh",
    ease: "none",
    duration: 5,
    
})
.to('.comete', { 
    width: "10vw", 
    scaleX: -1,
    ease: "none",
    duration: 0,
    delay:2,
})
.to('.comete', { 
    opacity: 1,
    x: "-110vw",
    y: "180vh",
    ease: "none",
    duration: 6,
    
})
.to('.comete', { 
    scaleX: 1,
    ease: "none",
    duration: 0,
})
.to('.comete', { 
    opacity: 1,
    x: "110vw",
    y: "270vh",
    ease: "none",
    duration: 4,
    
});




//gsap.fromTo('.satellite', {x: "-40vw"}, {x: "110vw", repeat:-1, ease:"power1.out", delay: 2 , duration:20});

gsap.to(".satellite", {
    x: "110vw", 
    
    ease:"power1.out", 

    scrollTrigger: {
        trigger: ".satellite",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});

gsap.to(".planet3", {
    y: "400%",
    ease: "none",
    scrollTrigger: {
      trigger: "#Deep_Space",
      scrub: true
    }
});


gsap.to(".galaxie", {
    rotation: 360,
    ease: "none",
    duration: 8,
    repeat:-1,
    scrollTrigger: {
      trigger: ".galaxie",
    }
});


gsap.to(".planet4", {
    y: "-1000%",
    ease: "none",
    scrollTrigger: {
      trigger: "#Deep_Space",
      scrub: true
    }
});

gsap.to('.pod2', {
    transformOrigin: '50% 50%',
    motionPath: {
      
      path: [
        {x: "-10vw", y: "15vh"}, 
        {x: "10vw", y: "150vh"}, 
        {x: "85vw", y: "375vh"}
      ],
      
    },
    duration: 8,
    repeat: -1,
    scrollTrigger: {
        trigger: "#troposphere",
      }
  })


/*

gsap.to(section.bg, {
    backgroundPosition: `50% ${-innerHeight / 2}px`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      scrub: true
    }
  });*/

/*
gsap.to(".nuage.quatre", {
    x: "-600%", 
    ease:"power1.out", 
    scrollTrigger: {
        trigger: ".nuage.quatre",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});

gsap.to(".nuage.six", {
    x: "-800%", 
    ease:"power1.out", 
    scrollTrigger: {
        trigger: ".nuage.six",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});
*/

gsap.timeline({scrollTrigger: {
    trigger: "#exosphere",
    start: "top bottom",
    end: "bottom top",
    markers: true
}})
.to(['.nuages .nuage.un', '.nuages .nuage.quatre', '.nuages .nuage.six', '.nuages .nuage.neuf'], { 
    x: "-150vw", 
    repeat: -1, 
    duration: 12,
});


gsap.timeline({scrollTrigger: {
    trigger: "#exosphere",
    start: "top bottom",
    end: "bottom top",
    markers: true
}})
.to(['.nuages .nuage.deux', '.nuages .nuage.trois', '.nuages .nuage.cinque', '.nuages .nuage.huit', '.nuages .nuage.dix'], { 
    x: "150vw", 
    repeat: -1, 
    duration: 13,
});


gsap.timeline({scrollTrigger: {
    trigger: "#thermosphere",
    start: "top bottom",
    end: "bottom top",
    markers: true
}})
.to(['#thermosphere .nuage.un', '#thermosphere .nuage.quatre', '#thermosphere .nuage.six', '#thermosphere .nuage.neuf', '#thermosphere .nuage.onze'], { 
    x: "-150vw", 
    repeat: -1, 
    duration: 12,
});


gsap.timeline({scrollTrigger: {
    trigger: "#thermosphere",
    start: "top bottom",
    end: "bottom top",
    markers: true
}})
.to(['#thermosphere .nuage.deux', '#thermosphere .nuage.trois', '#thermosphere .nuage.cinque', '#thermosphere .nuage.huit', '#thermosphere .nuage.dix', '#thermosphere .nuage.douze', '#thermosphere .nuage.treize'], { 
    x: "150vw", 
    repeat: -1, 
    duration: 13,
});


gsap.timeline({scrollTrigger: {
    trigger: "#mesosphere",
    start: "top bottom",
    end: "bottom top",
    markers: true
}})
.to(['#mesosphere .nuage.un', '#mesosphere .nuage.quatre'], { 
    x: "-150vw", 
    repeat: -1, 
    duration: 12,
});


gsap.timeline({scrollTrigger: {
    trigger: "#mesosphere",
    start: "top bottom",
    end: "bottom top",
    markers: true
}})
.to(['#mesosphere .nuage.deux', '#mesosphere .nuage.trois', '#mesosphere .nuage.cinque'], { 
    x: "150vw", 
    repeat: -1, 
    duration: 13,
});


gsap.timeline({scrollTrigger: {
    trigger: "#stratosphere",
    start: "top bottom",
    end: "bottom top",
    markers: true
}})
.to(['#stratosphere .nuage.un', '#stratosphere .nuage.quatre'], { 
    x: "-150vw", 
    repeat: -1, 
    duration: 12,
});


gsap.timeline({scrollTrigger: {
    trigger: "#stratosphere",
    start: "top bottom",
    end: "bottom top",
    markers: true
}})
.to(['#stratosphere .nuage.deux', '#stratosphere .nuage.trois', '#stratosphere .nuage.cinque'], { 
    x: "150vw", 
    repeat: -1, 
    duration: 13,
});

gsap.timeline({scrollTrigger: {
    trigger: "#stratosphere",
    start: "top bottom",
    end: "bottom top",
    markers: true
}})
.to(['#stratosphere .oiseau.un', '#stratosphere .oiseau.deux', '#stratosphere .oiseau.trois', '#stratosphere .oiseau.quatre', '#stratosphere .oiseau.cinque'], { 
    x: "120vw", 
    repeat: -1, 
    duration:8,
    stagger: {
        each: 1, // délai d'1 seconde entre le début de chaque animation
        from: "start" // commence le décompte à partir du début de chaque animation
    }
});

gsap.timeline({scrollTrigger: {
    trigger: "#troposphere",
    start: "top bottom",
    end: "bottom top",
    markers: true
}})
.to(['#troposphere .oiseau.un', '#troposphere .oiseau.deux', '#troposphere .oiseau.trois', '#troposphere .oiseau.quatre', '#troposphere .oiseau.cinque', '#troposphere .oiseau.six'], { 
    x: "120vw", 
    repeat: -1, 
    duration:8,
    stagger: {
        each: 1, // délai d'1 seconde entre le début de chaque animation
        from: "start" // commence le décompte à partir du début de chaque animation
    }
});

let timeline8 = gsap.timeline({
    scrollTrigger: {
        
        markers: false,
        start: 'top 0',
        end: 'bottom 0',
        trigger: '#troposphere',
        
    }
});
timeline8.to(".oiseauMorph", {morphSVG: ".poissonMorph", repeat: -1, ease:"power1.out"}, "+=0.2");

gsap.set(["#galaxie-1", "#galaxie-2", "#galaxie-3", "#galaxie-4", "#galaxie-5", "#galaxie-6", "#galaxie-7", "#galaxie-8", "#galaxie-9", "#galaxie-10", "#galaxie-11", "#galaxie-12", "#galaxie-13", "#galaxie-14", "#galaxie-15", "#galaxie-16", "#galaxie-17", "#galaxie-18", "#galaxie-19", "#galaxie-20", "#galaxie-21"],{drawSVG:"0% 0%"});

gsap.timeline({delay:1, scrollTrigger: {
    
    trigger: "#Deep_Space",
    start: "top bottom",
    end: "bottom top",
    markers: true
}})
  .fromTo(
    ["#galaxie-1", "#galaxie-2", "#galaxie-3", "#galaxie-4", "#galaxie-5", "#galaxie-6", "#galaxie-7", "#galaxie-8", "#galaxie-9", "#galaxie-10", "#galaxie-11", "#galaxie-12", "#galaxie-13", "#galaxie-14", "#galaxie-15", "#galaxie-16", "#galaxie-17", "#galaxie-18", "#galaxie-19", "#galaxie-20", "#galaxie-21"],
     {
      drawSVG:"0% 0%"
    },
    {
      drawSVG:"0% 100%",
      duration: 2,
      stagger: {
        each: 0.3,
    }
    }
  )
  .fromTo(
    ["#galaxie-1", "#galaxie-2", "#galaxie-3", "#galaxie-4", "#galaxie-5", "#galaxie-6", "#galaxie-7", "#galaxie-8", "#galaxie-9", "#galaxie-10", "#galaxie-11", "#galaxie-12", "#galaxie-13", "#galaxie-14", "#galaxie-15", "#galaxie-16", "#galaxie-17", "#galaxie-18", "#galaxie-19", "#galaxie-20", "#galaxie-21"],
    {
      fillOpacity: 0
    },
    {
      fillOpacity: 0.7,
      duration: 2
    }
  );
/*
gsap.fromTo('.oiseau.un', {x: "-200%"}, {x: "110vw", repeat:-1, ease:"power1.out", duration:8});
gsap.fromTo('.oiseau.deux', {x: "-200%"}, {x: "110vw", repeat:-1, ease:"power1.out", delay: 3, duration:5});
gsap.fromTo('.oiseau.trois', {x: "-200%"}, {x: "110vw", repeat:-1, ease:"power1.out", duration:10});
gsap.fromTo('.oiseau.quatre', {x: "-200%"}, {x: "110vw", repeat:-1, ease:"power1.out", delay: 1, duration:4});
gsap.fromTo('.oiseau.cinque', {x: "-200%"}, {x: "110vw", repeat:-1, ease:"power1.out", duration:9});

*/
/*gsap.to(".nuage.un", {
    x: "-600%", 
    repeat:-1,
    ease:"power1.out",  
    duration:10,
    scrollTrigger: {
        trigger: "#exosphere",
        start: "top bottom",
        end: "bottom top",
        markers: true
    }
});*/


//gsap.fromTo('.nuage.quatre', {x: "250%"}, {x: "-600%", repeat:-1, ease:"power1.out", delay: 2 , duration:10});
//gsap.fromTo('.nuage.six', {x: "200%"}, {x: "-800%", repeat:-1, ease:"power1.out", duration:14});
//gsap.fromTo('.nuage.un', {x: "200%"}, {x: "-600%", repeat:-1, ease:"power1.out",delay: 4, duration:20});
//gsap.fromTo('.nuage.neuf', {x: "200%"}, {x: "-600%", repeat:-1, ease:"power1.out", duration:15});
//gsap.fromTo('.nuage.onze', {x: "200%"}, {x: "-800%", repeat:-1, ease:"power1.out",delay: 3, duration:15});

/*gsap.fromTo('.nuage.deux', {x: "-200%"}, {x: "600%", repeat:-1, ease:"power1.out", duration:10});
gsap.fromTo('.nuage.trois', {x: "-200%"}, {x: "600%", repeat:-1, ease:"power1.out", delay: 6, duration:14});
gsap.fromTo('.nuage.cinque', {x: "-300%"}, {x: "600%", repeat:-1, ease:"power1.out", duration:12});
gsap.fromTo('.nuage.huit', {x: "-400%"}, {x: "400%", repeat:-1, ease:"power1.out",delay: 2, duration:15});
gsap.fromTo('.nuage.dix', {x: "-200%"}, {x: "600%", repeat:-1, ease:"power1.out", duration:15});
gsap.fromTo('.nuage.douze', {x: "800%"}, {x: "-700%", repeat:-1, ease:"power1.out", delay: 3, duration:16});
gsap.fromTo('.nuage.treize', {x: "-200%"}, {x: "700%", repeat:-1, ease:"power1.out", duration:10});
*/




/*
gsap.to('.comete', { 
    opacity:1 ,
    x: "110vw", y:"90vh", ease:"none", duration:5,repeat: -1,
    scrollTrigger: {
        start: 'top',
        end: 'bottom',
        trigger: '#DeepSpace',
        
    }
    })*/



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


/*
// Création de la timeline
let timeline4 = gsap.timeline({ repeat: -1 });

// Ajout des animations à la timeline
timeline4.fromTo('.nuage.quatre', { x: "250%" }, { x: "-600%", ease: "power1.out", delay: 2, duration: 10 });
timeline4.fromTo('.nuage.six', { x: "200%" }, { x: "-600%", ease: "power1.out", duration: 14 }, );
timeline4.fromTo('.nuage.un', { x: "200%" }, { x: "-600%", ease: "power1.out", delay: 4, duration: 20 }, );
timeline4.fromTo('.nuage.neuf', { x: "200%" }, { x: "-600%", ease: "power1.out", duration: 15 }, );
timeline4.fromTo('.nuage.onze', { x: "200%" }, { x: "-800%", ease: "power1.out", delay: 3, duration: 15 },);

timeline4.fromTo('.nuage.deux', { x: "-200%" }, { x: "600%", ease: "power1.out", duration: 10 }, );
timeline4.fromTo('.nuage.trois', { x: "-200%" }, { x: "600%", ease: "power1.out", delay: 6, duration: 14 }, );
timeline4.fromTo('.nuage.cinque', { x: "-300%" }, { x: "600%", ease: "power1.out", duration: 12 }, );
timeline4.fromTo('.nuage.huit', { x: "-400%" }, { x: "400%", ease: "power1.out", delay: 2, duration: 15 }, );
timeline4.fromTo('.nuage.dix', { x: "-200%" }, { x: "600%", ease: "power1.out", duration: 15 }, );
timeline4.fromTo('.nuage.douze', { x: "-200%" }, { x: "600%", ease: "power1.out", delay: 3, duration: 10 }, );
timeline4.fromTo('.nuage.treize', { x: "-200%" }, { x: "700%", ease: "power1.out", duration: 10 }, );
*/



/*
let nuageTime = gsap.timeline();

nuageTime
    .fromTo('.nuage.quatre', {x: "250%"}, {x: "-600%", repeat:-1, ease:"power1.out", delay: 0, duration:10})
    .fromTo('.nuage.six', {x: "200%"}, {x: "-600%", repeat:-1, ease:"power1.out", duration:14})
    .fromTo('.nuage.un', {x: "200%"}, {x: "-600%", repeat:-1, ease:"power1.out",delay: 0, duration:20})
    .fromTo('.nuage.neuf', {x: "200%"}, {x: "-600%", repeat:-1, ease:"power1.out", duration:15})
    .fromTo('.nuage.onze', {x: "200%"}, {x: "-800%", repeat:-1, ease:"power1.out",delay: 0, duration:15})
    .fromTo('.nuage.deux', {x: "-200%"}, {x: "600%", repeat:-1, ease:"power1.out", duration:10})
    .fromTo('.nuage.trois', {x: "-200%"}, {x: "600%", repeat:-1, ease:"power1.out", delay: 0, duration:14})
    .fromTo('.nuage.cinque', {x: "-300%"}, {x: "600%", repeat:-1, ease:"power1.out", duration:12})
    .fromTo('.nuage.huit', {x: "-400%"}, {x: "400%", repeat:-1, ease:"power1.out",delay: 0, duration:15})
    .fromTo('.nuage.dix', {x: "-200%"}, {x: "600%", repeat:-1, ease:"power1.out", duration:15})
    .fromTo('.nuage.douze', {x: "800%"}, {x: "-700%", repeat:-1, ease:"power1.out", delay: 0, duration:16})
    .fromTo('.nuage.treize', {x: "-200%"}, {x: "700%", repeat:-1, ease:"power1.out", duration:10});

nuageTime.play(); 
*/




