gsap.registerPlugin(ScrollTrigger);

gsap.to('.square', {
    // x: 1000,
    duration: 3,
    scrollTrigger: {
        trigger: '.square2',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 4,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
        pin: '.square',
        // to just pin put "true"
        pinSpacing: true,
        markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            indent: 200
            },

    }
})