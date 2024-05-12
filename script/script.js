gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(TextPlugin);
//gsap.registerPlugin(MorphSVGPlugin);
//gsap.registerPlugin(DrawSVGPlugin);


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

gsap.to('.stars2', { 
    y: '100%',
    scrollTrigger: {
        scrub: true,
    
        start: 'top 0',
        end: 'bottom 15%',
        trigger: '.stars2',
    }
    })
        
    gsap.to('.stars3', { 
    y: '100%',
    scrollTrigger: {
        scrub: true,
    
        start: 'top 0',
        end: 'bottom 35%',
        trigger: '.stars3',
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
    }
});

        
    gsap.to('header .stars4', { 
    y: '100%',
    scrollTrigger: {
        scrub: true,
    
        start: 'top 0',
        end: 'bottom 25%',
        trigger: '.stars4',
    }
    })
    
    gsap.to('.stars5', { 
        y: '50%',
        scrollTrigger: {
            scrub: true,
        
            start: 'top 0',
            end: 'bottom 0',
            trigger: '.stars5',
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

/*--------------------------------------------------------- 
# Chapitre1
---------------------------------------------------------*/ 
gsap.to('#Deep_Space .stars1', { 
    y: '5%',
    backgroundPosition: `50% ${-innerHeight / 2}px`,
    scrollTrigger: {
        scrub: true,

        trigger: '#Deep_Space',
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
       

gsap.timeline({scrollTrigger: {

    trigger: "#Deep_Space", 
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

gsap.to(".planet3", {
    y: "400%",
    ease: "none",
    scrollTrigger: {
      trigger: "#Deep_Space",
      scrub: true
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

gsap.to(".galaxie", {
    rotation: 360,
    ease: "none",
    duration: 8,
    repeat:-1,
    scrollTrigger: {
      trigger: ".galaxie",
    }
});

/*
gsap.set(["#galaxie-1", "#galaxie-2", "#galaxie-3", "#galaxie-4", "#galaxie-5", "#galaxie-6", "#galaxie-7", "#galaxie-8", "#galaxie-9", "#galaxie-10", "#galaxie-11", "#galaxie-12", "#galaxie-13", "#galaxie-14", "#galaxie-15", "#galaxie-16", "#galaxie-17", "#galaxie-18", "#galaxie-19", "#galaxie-20", "#galaxie-21"],{drawSVG:"0% 0%"});

gsap.timeline({delay:1, scrollTrigger: {
    
    trigger: "#Deep_Space",
    start: "top bottom",
    end: "bottom top",
}})
  .fromTo(
    ["#galaxie-1", "#galaxie-2", "#galaxie-3", "#galaxie-4", "#galaxie-5", "#galaxie-6", "#galaxie-7", "#galaxie-8", "#galaxie-9", "#galaxie-10", "#galaxie-11", "#galaxie-12", "#galaxie-13", "#galaxie-14", "#galaxie-15", "#galaxie-16", "#galaxie-17", "#galaxie-18", "#galaxie-19", "#galaxie-20", "#galaxie-21"],
     {
      drawSVG:"0% 0%"
    },
    {
      drawSVG:"0% 100%",
      duration: 1,
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
  );*/

/*--------------------------------------------------------- 
# Chapitre2
---------------------------------------------------------*/

gsap.to(".satellite", {
    x: "110vw", 
    
    ease:"none", 

    scrollTrigger: {
        trigger: ".satellite",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
});
/*--------------------------------------------------------- 
# Chapitre3
---------------------------------------------------------*/  
gsap.to('.flamme', { 
    opacity: 1,
    scrollTrigger: {
        scrub: true,

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

/*--------------------------------------------------------- 
# Chapitre4
---------------------------------------------------------*/ 

gsap.timeline({scrollTrigger: {
    trigger: "#exosphere",
    start: "top bottom",
    end: "bottom top",
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
}})
.to(['.nuages .nuage.deux', '.nuages .nuage.trois', '.nuages .nuage.cinque', '.nuages .nuage.huit', '.nuages .nuage.dix'], { 
    x: "150vw", 
    repeat: -1, 
    duration: 13,
});

/*--------------------------------------------------------- 
# Chapitre5
---------------------------------------------------------*/ 
gsap.timeline({scrollTrigger: {
    trigger: "#thermosphere",
    start: "top bottom",
    end: "bottom top",
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
}})
.to(['#thermosphere .nuage.deux', '#thermosphere .nuage.trois', '#thermosphere .nuage.cinque', '#thermosphere .nuage.huit', '#thermosphere .nuage.dix', '#thermosphere .nuage.douze', '#thermosphere .nuage.treize'], { 
    x: "150vw", 
    repeat: -1, 
    duration: 13,
});
/*--------------------------------------------------------- 
# Chapitre6
---------------------------------------------------------*/ 
gsap.timeline({scrollTrigger: {
    trigger: "#mesosphere",
    start: "top bottom",
    end: "bottom top",
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
}})
.to(['#mesosphere .nuage.deux', '#mesosphere .nuage.trois', '#mesosphere .nuage.cinque'], { 
    x: "150vw", 
    repeat: -1, 
    duration: 13,
});

/*--------------------------------------------------------- 
# Chapitre7
---------------------------------------------------------*/ 

gsap.timeline({scrollTrigger: {
    trigger: "#stratosphere",
    start: "top bottom",
    end: "bottom top",
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
}})
.to(['#stratosphere .oiseau.un', '#stratosphere .oiseau.deux', '#stratosphere .oiseau.trois', '#stratosphere .oiseau.quatre', '#stratosphere .oiseau.cinque'], { 
    x: "120vw", 
    repeat: -1, 
    duration:8,
    stagger: {
        each: 1,
        from: "start"
    }
});
/*--------------------------------------------------------- 
# Chapitre8
---------------------------------------------------------*/ 
gsap.to('.pod2', {
    transformOrigin: '100% 100%',
    opacity:1,
    motionPath: {
      path: [
        {x: "-10vw", y: "15vh"}, 
        {x: "10vw", y: "150vh"}, 
        {x: "70vw", y: "250vh"}, 
        {x: "15vw", y: "375vh"}
      ],
    },
    duration: 8,
    repeat: -1,
    scrollTrigger: {
        trigger: "#troposphere",
      }
  })


  gsap.timeline({scrollTrigger: {
    trigger: "#troposphere",
    start: "top bottom",
    end: "bottom top",
}})
.to(['#troposphere .oiseau.un', '#troposphere .oiseau.deux', '#troposphere .oiseau.trois', '#troposphere .oiseau.quatre', '#troposphere .oiseau.cinque', '#troposphere .oiseau.six'], { 
    x: "120vw", 
    repeat: -1, 
    duration:8,
    stagger: {
        each: 1,
        from: "start"
    }
});



/*let timeline8 = gsap.timeline({
    scrollTrigger: {
        start: 'top 40%',
        end: 'bottom 40%',
        trigger: '.cloud_morph',
        
        
    }
});
timeline8.to(".cloud_morph", {
    scale:2,
    morphSVG: ".b2",
    ease: "power1.out",
    
  });
  */
