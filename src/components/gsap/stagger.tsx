import gsap from "gsap"
import { useEffect, useState } from "react"
const Stagger = () => {

const [showBoxes,setShowBoxes] = useState<boolean>(false)


useEffect(()=>{
   const clx = gsap.context(()=>{
    const tl = gsap.timeline()
    tl.fromTo(".box",{
        y:100,
        duration:1,
        delay:0.5
    },{
        y:0,
        duration:1,
        stagger:{
            amount:0.5,
            from:"random"
        }
    })
    
   }
)

 return ()=> clx.revert()
},[])

useEffect(()=>{
console.log(showBoxes);

},[showBoxes])

const handleStagger = (index?:number)=>{

const tl = gsap.timeline()



    if (showBoxes) {


        tl.fromTo(".box",{
            y:100,
            duration:1,
            delay:0.5
        },{
            y:0,
            duration:1,
            stagger:{
                amount:1,
                from:index ? index : "random"
            }
           
        })

        setShowBoxes(false)
    }
    else{
        tl.to(".box",{
            y:-100,
            duration:1,
            delay:0.5,
            stagger:{
                amount:1,
                from:index ? index : "random"
            }
        })
        setShowBoxes(true)
    
    }

}



  return (
<div>

{/* boxes container */}
<section className="w-[70%] mx-auto bg-[red] overflow-hidden">

<div className='flex justify-center items-center  gap-x-3 overflow-y-hidden py-2'>

    

{Array(5).fill("").map((_,index)=>{
    return <div 
    onClick={()=> handleStagger(index )}
     className={`box w-[50px] h-[50px] rounded-md cursor-pointer ${index % 2 == 0 ? "bg-gradient-to-r from-blue-500 to-green-500" : "bg-gradient-to-r from-yellow-500 to-red-200"}`}>
 
</div>
})}


</div>

<button onClick={()=> handleStagger()}>Show Boxes</button>
</section>
</div>
  )
}

export default Stagger