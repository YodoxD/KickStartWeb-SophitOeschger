gsap.from('.txtEgo',{ duration: 6, y: '-100%', ease: "bounce" })

gsap.registerPlugin(ScrollTrigger);
gsap.to('.txtEgo', {
    duration: 10,
    scrollTrigger: '.txtEgo'
})