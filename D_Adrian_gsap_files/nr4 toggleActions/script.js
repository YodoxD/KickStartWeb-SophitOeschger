gsap.registerPlugin(ScrollTrigger);

gsap.to('.square', {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: '.square',
        start: 'top 60%',
        end: 'top 40%',
        toggleActions: 'restart pause resume reverse', 
        //              onEnter     onLeave     onEnterBack     onLeaveBack
        markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            indent: 200
            },

    }
})