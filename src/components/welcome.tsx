import { SplitText } from "gsap/SplitText"
import gsap from "gsap"
import { useEffect } from "react"
import Donut from "../svgs/donut"

gsap.registerPlugin(SplitText)
const Welcome = () => {


useEffect(()=>{

console.log("from welcome");

const split = SplitText.create(".welcome-text",{
    type:"chars"
})

const tl = gsap.timeline()

// gsap.from(split.chars,{
//     duration:2,
//     // y:50,
//     // yPercent:-100,
//     opacity:1,
//     // xPercent:"random([-100,100])",
//     autoAlpha:-10,
//     stagger:{
//         amount:1,
//         from:"random"
//     }

// })

tl.from(split.chars, {
    duration: 2,
    yPercent: 100,
    scaleX:-1,
    autoAlpha: 0,
    stagger:{
      amount:2,
      from:"random"
    },
    ease: "power3.out"
  })
  .to(split.chars,{
        duration:2,
    yPercent:0,
    scaleX:-0.5,
    autoAlpha:1,
      stagger: 0.03,
    ease: "power3.out"
 
  })
  .to(split.chars, {
    scaleX:1,
    duration: 1,
    yPercent: 0,
    autoAlpha: 1,
    stagger: {
      amount:2,
      from:"random"
    },
    ease: "power3.in"
  }).from(".donus",{
autoAlpha:0,
translateX:-200,

  }).to(".donut",{
    autoAlpha:1,
    x:0,
    rotate:"360deg",
    duration:1
  })





  gsap.to(".donut",{
    rotate:"360",
    duration:1.5,
    repeat:-1,
    yoyo:true,
    ease:"none",
    transformOrigin: "50% 50%"
  })
  

},[])


useEffect(()=>{
  let split = SplitText.create(".iamadebest",{
      // type:"words lines chars"
      type:"chars words",
      // for words
      // wordsClass:"word"
      wordsClass:"word++",

      // for  lines
      // linesClass:"line",

      // for chars
      // charsClass:"char"

      propIndex:true
  })
  

  

  const tl = gsap.timeline()

  tl.from(split.chars,{
    yPercent:"random([-100,100])",
    rotation:"random(-80,80)",
    delay:8,
    // delay:6,
    autoAlpha:0,
    // repeat:-1,
    // yoyo:true,
    duration:5,
    stagger:{
      amount:2,
      from:"random",
      // repeat:-1,
      // yoyo:true,
    
    }
  }).to(split.chars,{
  yPercent:"random([-100,100])",
  rotation:"random(-80,80)",
  delay:2,
  autoAlpha:1,
  repeat:-1,
  yoyo:true,
  duration:2,
  stagger:{
    amount:2,
    from:"random",
    // repeat:-1,
    // yoyo:true,
  
  }
  

}
)
// gsap.from(split.chars,{
//   yPercent:"random([-100,100])",
//   rotation:"random(-80,80)",
//   delay:6,
//   autoAlpha:1,
//   repeat:-1,
//   yoyo:true,
//   duration:1,
//   stagger:{
//     amount:2,
//     from:"random",
//     // repeat:-1,
//     // yoyo:true,
  
//   }
  

// }
// )


},[])





  return (
    <div className="md:w-[90%] mx-auto ">
        
<div className="text-[5rem] font-bold ">
<h1 className="text-center font-pacifico"><span className="welcome-text overflow-y-hidden">Welcome to my Playground</span> <span className="overflow-hidden  inline-flex items-center justify-center  "><Donut/></span></h1> 

<h1 className="iamadebest font-blackOps text-center">I am Adebest and I love animations and visual effects</h1>
</div>

    </div>
  )
}

export default Welcome