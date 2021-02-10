document.addEventListener('DOMContentLoaded', () => {

    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1, {width : '100%'},
    { width: '0%', delay: 5, ease: Expo.easeInOut })

    tl.fromTo('.bg-video', 2, { width : '0%', opacity: 0 },
    { width: '100%', opacity: 1, ease: Expo.easeInOut }, '-=1')

    tl.fromTo('.logo', 2, { width : '0%', opacity: 0 },
    { width: '100%', opacity: 1, ease: Expo.easeInOut }, '-=0.5')

})