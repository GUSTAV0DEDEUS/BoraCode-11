import gsap from "gsap";

const tl = gsap.timeline();

export const preLoaderAnim = () =>{
  tl.to("#load img",{
    duration: 1,
    opacity: 1,
    css: {width: "16rem"}
  })
  .to("#load .text",{
    duration: 2,
    ease: "Power3.easeOut",
    css: {width: "auto", overflow: "visible"}
  })
  .to("#load",{
    duration: 3,
    ease: "Power3.easeOut",
    css: {transform: "translateY(100%)", display: "none"}
  })
}