gsap.from('.txtEgo',{ duration: 6, y: '-100%', ease: "bounce" })

gsap.registerPlugin(ScrollTrigger);
gsap.to('.txtEgo', {
    duration: 10,
    scrollTrigger: '.txtEgo'
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".txtTellMe",
        start: "top 80%",
        end: "+=1000",
        //markers:true,
        pin:true,
        scrub: true
    }
});

tl.from('.txtTellMe', {opacity: 0, duration: 1})
