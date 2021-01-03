gsap.registerPlugin(ScrollTrigger);


function init(){

    // gsap.to("#intro img",{
    //     duration :1, 
    //     opacity:0,
        
    //     scrollTrigger:{
    //         trigger:'#intro',
    //         start:'top top', //(quand top intro atteint top écran (scroll) => opacité)
    //         scrub:true,
    //         markers:true,

    //     } //ScrollTrigger
    // }) //gsap.to

//----------------------------------------toogle css class-------------------------------------------------
    // gsap.set("#project02", {
    //     scrollTrigger:{
    //         trigger:'#project02',
    //         start:'top bottom-=150', //(on retire 150px du bottom)
    //         end:'bottom center-=150', //(on remonte le end de 150px)
    //         markers:true,
    //     toggleClass:'active'
    //     }
    // })

//----------------------------------------simple parallax-------------------------------------------------
    // const parallaxTL = gsap.timeline({
    //     ease:'none',
    //     scrollTrigger:{
    //         trigger:'.bcg-parallax',
    //         start:'top bottom-=50%',
    //         scrub:true,
    //         markers:true
    //     }
    // });

    // parallaxTL
    // .from('.content-wrapper', { duration: 0.4, autoAlpha:0 },0.1)
    // .from('.bcg', { duration: 2, y:'-30%' },0)


//----------------------------------------simple pin effect-------------------------------------------------
    // gsap.to(["#intro h1, #intro p"], {
    //     autoAlpha:0,
    //     ease:'none',
    //     scrollTrigger:{
    //         trigger:'#intro .content',
    //         start:'top 10%',
    //         end:'bottom 30%',
    //         pin:true, //(pin => laisse l'élément en position fixe)
    //         scrub:true,
    //         markers:true,

    //     }
    // })


//----------------------------------------toogle actions-------------------------------------------------


    const projects = document.querySelectorAll('.project');

    projects.forEach((project)=>{
        gsap.from(project,{
            opacity:0,
            yPercent:5, //(rajoute 5% à la position y)
            scrollTrigger:{
                trigger: project.querySelector('img'),
                start:'top bottom-=300',
                end:'top center',
                toggleActions:'play none none reverse',
                markers:false,
            }

        }) //forEach
    }); //const



} //init

window.addEventListener('load', function(){
    init();
});





    // gsap.from(selector, {duration: 1, fromVars})
    // gsap.fromTo(selector, {fromVars}, {duration: 1, toVars})