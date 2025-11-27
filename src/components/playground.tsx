import gsap from "gsap"
import { useEffect, useRef } from "react"
import Donut from "../svgs/donut"



const Playground = () => {

const boxesRef = useRef<HTMLDivElement[] | []>([])




useEffect(()=>{
const tl = gsap.timeline()

// const clone = document.querySelectorAll(".box").forEach((box,index)=>{

    


   
// })



boxesRef.current.forEach((box,index)=>{
    const clone = box.querySelectorAll(".clone")
    const original = box.querySelectorAll(".original")
    console.log(clone);
    
    gsap.set(clone,{
        yPercent:index % 2 == 0 ? -100 : 100
    })

    const tl = gsap.timeline({defaults:{duration:4,ease:"power4.inOut"}})
    


   let rollOne =   gsap.to(original,{
        yPercent:index % 2 == 0 ? "100" : "-100",
        repeat:4,
        duration:1,
       ease:"none"
    })


   let rollTwo =  gsap.to(clone,{
        yPercent:0,
        repeat:4,
        duration:1,
        ease:"none"
    })



    // gsap.to(original, {
       
    //     yPercent: index % 2 == 0 ? 100 : -100, 
    //     duration: 0.2,
    //     ease: "none",
    //     repeat: 3 
    // });

    
    // gsap.to(clone, {
       
    //     yPercent: 0, 
    //     duration: 0.2,
    //     ease: "none",
    //     repeat: 3 
    // });


})






},[])



const texts = [{origin:"A",clone:"K"},{origin:"D",clone:"K"},{origin:"E",clone:"Z"},{origin:"S",clone:"W"},{origin:"E",clone:"H"},{origin:"U",clone:"W"},{origin:"N",clone:<Donut/>}]

  return (
    <div className=" flex items-center justify-center w-screen h-screen ">


<div className="text-[5rem] flex">
  
{texts.map((text,index)=>{

return <div key={index} ref={el => {
boxesRef.current[index] = el as HTMLDivElement
}} className="box  relative flex overflow-hidden font-barlow font-bold ">
    <section className="original w-[70px] text-center">{text.origin}</section>
    <section className="clone absolute top-0  text-center left-0 w-[70px] " >{text.origin}</section>
</div>

})}
  
   
</div>



    </div>
  )
}

export default Playground