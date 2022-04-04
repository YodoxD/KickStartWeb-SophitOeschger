gsap.registerPlugin(ScrollTrigger);

gsap.to('.square', {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: '.square',
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
        // if put a value it gets smoother
        toggleActions: 'restart none none none', 
        pin: true,
        markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            indent: 200
            },

    }
})
