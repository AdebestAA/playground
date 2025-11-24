import { SplitText } from "gsap/SplitText"
import gsap from "gsap"
import { useEffect } from "react"
// import Donut from "../svgs/donut"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)
const Welcome = () => {


useEffect(()=>{


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


  // gsap.to(".donut",{
  //   rotate:"360",
  //   duration:1.5,
  //   repeat:-1,
  //   yoyo:true,
  //   ease:"none",
  //   transformOrigin: "50% 50%"
  // })



  gsap.to(split.chars,{
    yPercent:"random([-100,100])",
    rotation:"random(-80,80)",
    delay:8,
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
  })
  

},[])


// useEffect(()=>{
//   let split = SplitText.create(".iamadebest",{
//       // type:"words lines chars"
//       type:"chars words",
//       // for words
//       // wordsClass:"word"
//       wordsClass:"word++",

//       // for  lines
//       // linesClass:"line",

//       // for chars
//       // charsClass:"char"

//       propIndex:true
//   })
  

  

//   const tl = gsap.timeline()

//   tl.from(split.chars,{
//     yPercent:"random([-100,100])",
//     rotation:"random(-80,80)",
//     delay:8,
//     // delay:6,
//     autoAlpha:0,
//     // repeat:-1,
//     // yoyo:true,
//     duration:5,
//     stagger:{
//       amount:2,
//       from:"random",
//       // repeat:-1,
//       // yoyo:true,
    
//     }
//   }).to(split.chars,{
//   yPercent:"random([-100,100])",
//   rotation:"random(-80,80)",
//   delay:2,
//   autoAlpha:1,
//   repeat:-1,
//   yoyo:true,
//   duration:2,
//   stagger:{
//     amount:2,
//     from:"random",
  
  
//   }
  

// }
// )
// // gsap.from(split.chars,{
// //   yPercent:"random([-100,100])",
// //   rotation:"random(-80,80)",
// //   delay:6,
// //   autoAlpha:1,
// //   repeat:-1,
// //   yoyo:true,
// //   duration:1,
// //   stagger:{
// //     amount:2,
// //     from:"random",
// //     // repeat:-1,
// //     // yoyo:true,
  
// //   }
  

// // }
// // )


// },[])



useEffect(()=>{
gsap.to(".scroll-down",{
  translateY:"-100%",
  yoyo:true,
  repeat:-1
})

}),[]
useEffect(()=>{

// const split = SplitText.create(".iamadebest",{
//   type:"words, chars"
// })



// gsap.from(split.chars,{
// yPercent:"100",
// duration:5,
// fontSize:"4rem",
// scale:3,
// autoAlpha:0,
// stagger:{
//   amount:1,
  
//   from:"start"
// }

// })

  const tl = gsap.timeline({defaults:{duration:1.5,ease:"bounce.inOut",scrollTrigger:{
    trigger:".word",
    start:"20px 80%",
    // markers:true,
   end:"50%",
    scrub:true
  }}})
  tl.fromTo(".word-1",{
    x:"-100%",
  opacity:0,
  },{
    x:"0%",
    opacity:1,    
  })
  .fromTo(".word-2",{
y:"-100%",
opacity:0,

  },{
opacity:1,
y:"0%"

  })
  .fromTo(".word-3",{
opacity:0,
scale:4,
rotate:"360deg"

  },{
opacity:1,
duration:3,
rotate:"0deg",
scale:1,

  })
  .fromTo(".word-4",{
opacity:0,
rotate:"360deg"
  },{
opacity:1,
rotate:"0deg",
  })
  .fromTo(".word-5",{
opacity:0,
y:-100,
  },{
opacity:1,
y:0

  })
  .fromTo(".word-6",{
opacity:0,
scale:0,
  },{
opacity:1,
scale:1
  })
  .fromTo(".word-7",{
opacity:0,
scale:7,
rotate:"270deg"
},{
  opacity:1,
  scale:1,
  rotate:"0deg"
  })
  .fromTo(".word-8",{
opacity:0,
xPercent:"-100"
},{
  opacity:1,
xPercent:"0"
  })
  .fromTo(".word-9",{
    opacity:0,
    rotate:"360deg"
      },{
    opacity:1,
    rotate:"0deg",
      })
  .fromTo(".word-10",{
    opacity:0,
    
      },{
    opacity:1,
    
      })



  // to(".word-1",{
  //   rotateX:"720deg",
  //   ease:"power2.Out", 
  //   repeatDelay:2,
  //   duration:3,
  //   repeat:-1
  // })

},[])



const words = "I am Adebest and I love animations and visual effects"
  return (
    <div className="md:w-[90%] mx-auto ">
        
<div className="text-[5rem] font-bold flex flex-col ">
  <section className="mb-64 mt-24">
<h1 className="text-center  font-blackOps"><span className="welcome-text overflow-y-hidden">Welcome to my Playground</span> </h1> 
  </section>


<h1 className="scroll-down  text-center">Scroll Down</h1>
<h1 className="iamadebest  text-center flex flex-wrap gap-x-4 justify-center md:px-0 px-2">
 {words.split(" ").map((word:string,index:number)=>{

  return <div className={`word-wrapper-${index}  overflow-hidden lg:text-[8rem] `}>
    <div className={`word-${index + 1} `}>
      
{ word}
      
    </div>
  </div>
 })}
  {/* <span className="overflow-hidden  inline-flex items-center justify-center "><Donut/></span> */}
</h1>
</div>

    </div>
  )
}

export default Welcome