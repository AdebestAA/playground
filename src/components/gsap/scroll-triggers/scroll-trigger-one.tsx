import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect } from "react"
gsap.registerPlugin(ScrollTrigger)



const ScrollTriggerOne = () => {


  // toggleActions:"restart pause restart none" explantion fo each of the position,
  // 1) the first position is for when the Element enters the screen or scroll into the element
  //2)  the second position is for when you scroll past the element, like pause the amination when you scroll past the element
  //3)  the third positon is for when you scroll back into the Element(i.e the like the animation resuming at where it pause when you scrolled past before)
  // 4) the last position is for when we scroll all the way to the start and scroll into the element again, (ie.e when you set the first three positions to "none" and set the last as "restart", the box wont move when you scroll into it, nothing will also happen when you scroll past it and scroll back into it after scrolling past it, the animation will only fire when you scroll all the way to the top and now scroll down back to where the element it,)

//   Position,Trigger Event,Description
// 1st,onEnter,When the start marker scrolls into the viewport. (Scrolling down past the start point.)
// 2nd,onLeave,When the end marker scrolls out of the viewport. (Scrolling down past the end point.)
// 3rd,onEnterBack,When the end marker scrolls back into the viewport. (Scrolling up past the end point.)
// 4th,onLeaveBack,When the start marker scrolls back out of the viewport. (Scrolling up past the start point.)



// Start method

// start: "top center"
// the first position is for the box like start the animation when the top of the element enters the viewport , while the second position is for the where to start the AnimationTimeline, with "top center" it means the animation will start when the top of the element gets to the center of the viewport
useEffect(()=>{
  gsap.to(".box2",{
    scrollTrigger:{
      trigger:".box2",
      start:"top center",//<- top,center,bottom or %,px(relative to the top of the element) 
      end:"bottom top",//<- top,center,bottom or %,px(relative to the top of the etopnt) 
      markers:true,
      // toggleActions:"play pause none restart",
      // scrub:5,
      pin:"true"
    },
    x:"50vw",
    rotate:"270deg",
    duration:4
  })
},[])
  return (
    <div className="py-20">
<div className="box1 bg-[red] rounded-md w-[80px] h-[80px] flex items-center justify-center">box1</div>
<div className="box2 bg-[red] rounded-md w-[80px] h-[80px] flex items-center justify-center mt-[80vh]">box2</div>
<div className="box3 bg-[red] rounded-md w-[80px] h-[80px] flex items-center justify-center mt-[150vh]">box3</div>

    </div>
  )
}

export default ScrollTriggerOne