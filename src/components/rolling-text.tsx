import gsap from "gsap"
import { useEffect, useRef } from "react"
import Donut from "../svgs/donut"
import { SplitText } from "gsap/all"



const RollingText = () => {

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

    


   let rollOne =   gsap.to(original,{
        yPercent:index % 2 == 0 ? "100" : "-100",
        repeat:10,
        duration:0.2,
        ease:"none"
    })
    
    
    let rollTwo =  gsap.to(clone,{
        yPercent:0,
        repeat:10,
        duration:0.2,
        ease:"none"
    })

    tl.add(rollOne,0)
    tl.add(rollTwo,2)


})

gsap.to(tl,{
    progress:1,
    duration:4,
    ease:"power4.inOut",
   
})



const splitText = SplitText.create(".text-split",{
    type:"chars"
})

gsap.to(splitText.chars,{
opacity:0,
delay:4,
duration:1,
stagger:{
    amount:0.2,
    from:"end"
}
})

// gsap.to(".box",{
//     display:"none",
//     delay:5,
//     duration:1,
//     ease:"none"
// })



},[])



// const texts = [{origin:"A",clone:"K"},{origin:"D",clone:"K"},{origin:"E",clone:"Z"},{origin:"S",clone:"W"},{origin:"E",clone:"H"},{origin:"U",clone:"W"},{origin:"N",clone:<Donut/>}]
const texts = ["P","L","A","Y","G","R","O","U","N","D"]

  return (
    <div className=" flex items-center justify-center w-screen h-screen ">


<div className="md:text-[5rem] text-[1rem] flex">
  
{texts.map((text,index)=>{

return <div key={index} ref={el => {
boxesRef.current[index] = el as HTMLDivElement
}} className="box  relative flex overflow-hidden font-barlow font-bold ">
    <section className="original md:w-[50px] w-[20px] text-center text-split">{text}</section>
    <section className="clone absolute top-0  text-center left-0 md:w-[50px] w-[20px] text-split" >{text}</section>
</div>

})}
  
   
</div>



    </div>
  )
}

export default RollingText