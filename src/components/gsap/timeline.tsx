import gsap from "gsap"
import { useEffect, useRef } from "react"
const Timeline = () => {

    const box = useRef<HTMLDivElement | null>(null)


    useEffect(()=>{
const clx = gsap.context(()=>{
const tl = gsap.timeline({
    defaults:{duration:1.5,ease:"power1.inOut"},
    

})

tl.to(box.current,{
    x:100,
    duration:2,


}).to(box.current,{
    x:0,
    rotate:360,
    borderRadius:"50%",
    duration:1,
    ease:"power2.inOut",
    

}).to(box.current,{
    x:0,
    borderRadius:"0%",
})



// tl.to(box.current,{
//     yoyo:true,
//     repeat:-1,
//     keyframes:[
//         {x:50,duration:1,borderRadius:"50px"},
//         {x:100,duration:1,borderRadius:"0px",rotate:360,scale:1.5},
//         // {x:0,duration:3,borderRadius:"0px",},

//     ]
// })








})


return ()=> clx.revert()
    },[])

  return (
    <div className="w-[70%] mx-auto border-1 rounded-md border-gray-500 px-2 overflow-hidden py-4">
        
        <div ref={box} className=" w-[50px] h-[50px] bg-gradient-to-r from-blue-500 to-red-500"></div>
        
        </div>
  )
}

export default Timeline