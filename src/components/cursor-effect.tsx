import  { useEffect } from 'react'
import gsap from 'gsap'
const CursorEffect = () => {

    const handleMouseMove = (event:MouseEvent)=> {

        const {clientX,clientY} = event

       
        gsap.to(".cursor",{
            x:clientX ,
            y:clientY,
            delay:-5,
            display:"none",
            ease:"power2.inOut"
            })
               
     



    }

    useEffect(()=>{
window.addEventListener("mousemove",handleMouseMove)


return ()=> window.removeEventListener("mousemove",handleMouseMove)
    },[])
  return (
    <>


    <div
  
    className=' text-[4rem] text-center  font-semibold'>
            <div className='pointer-and-blendmode cursor w-[20px] h-[20px] rounded-full absolute inset-0 bg-[white] '></div>
        <span
        onMouseMove={()=> {

            gsap.to(".cursor",{
              scale:3,
              duration:0.3,
              display:"block"
                
                })
    
        }}
    onMouseEnter={()=> {

        gsap.to(".cursor",{
          scale:3,
          duration:0.3,
          display:"block"
            
            })

    }}
    onMouseLeave={()=> {
        gsap.to(".cursor",{
            scale:1,
            duration:0.3,
            display:"none"
             
             })

    }}
    >Hover Me!</span></div>
    </>
  )
}

export default CursorEffect