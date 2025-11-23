import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'


gsap.registerPlugin(SplitText)

const data = [
    {
        id:1,
        name:"Port",
        img:"/pg.png"
    },
    {
        id:2,
        name:"Indonesia",
        img:"/id.png"
    },
    {
        id:3,
        name:"Nigeria",
        img:"/ng.png"
    },
    {
        id:4,
        name:"India",
        img:"/in.png"
    },
    {
        id:5,
        name:"China",
        img:"/cn.png"
    },
    {
        id:6,
        name:"Mexico",
        img:"/mx.png"
    },
]



const SplitTextCountries = () => {

    const imageContainerRef = useRef<HTMLDivElement[] | []>([])
    const [currIndex,setCurrIndex] = useState<number>(data.length + 2)
    const [mouseLeave,setMouseLeave] = useState<boolean>(true)
    const [interValCount,setIntervalCount] = useState<number>(0)
    const [pageRendered,setPageRendered] = useState<boolean>(false)


 

// gsap for image
    useEffect(()=>{
setPageRendered(true)
const clx = gsap.context(()=>{
gsap.fromTo(imageContainerRef.current,{
opacity:0,
y:-100,
},{
    opacity:1,
    delay:1,
    y:0,
    duration:2,
    
    stagger:{
        from:"random",
        amount:0.5,
        
    }

})


})

return ()=> clx.revert()
    },[])




    // scale in hover 

    const scaleOnHover = (index:number)=> {
        // splitTextEffect()
        gsap.to(imageContainerRef.current[index],{
            scale:1.3,
            duration:0.5,
            ease:"power2.inOut",
          
        })


    }
    const scaleOutOnHover = (index:number)=> {
        // removeSplitTextEffect()
        gsap.to(imageContainerRef.current[index],{
            scale:1,
            duration:0.7,
            
        })


    }



    




const translateY = (index:number)=>{
// clx
    const clx = gsap.context(()=>{
gsap.to(".counttry-name",{
y:`-${(index * 100)}%`,
opacity:1,
delay:-14

})

})

// split

const splitText = SplitText.create(".split-text",{
    type:"chars",
    

})
gsap.from(splitText.chars,{
    autoAlpha:1,
    yPercent:"random([-20,20])",
    // repeat:-1,
    // yoyo:true,
    ease:"power2.inOut",
    duration:"1",
   
    stagger:{
        amount:0.5,
        from:"random"
    }
    
})



}


useEffect(()=>{
translateY(data.length)
},[])
useEffect(()=>{
if (!mouseLeave) {
    return
}

console.log(interValCount);

  const interValId = setInterval(()=>{
    
    if (interValCount === 2) {
        translateY(data.length)
        setMouseLeave(false)
        setIntervalCount(0)   
    }
    else{
        setIntervalCount(prev => prev + 1)
    }
// console.log("what");


 },250)


 return ()=> clearInterval(interValId)
 
},[mouseLeave,interValCount])

  return (
    <div className='font-barlow py-8'>

       <h1 className='text-center  text-lg font-bold'>Split Text Countries</h1>


       <section className='flex justify-between overflow-hidden w-[50%] mx-auto py-8 px-4'>
        {data.map((item,index:number)=>{

            return <div

            onMouseEnter={()=> {
                scaleOnHover(index)
            // setCurrIndex(index)
            console.log("what");
            setMouseLeave(false)
            
            translateY(index)
           
            
            
            }}
            onMouseLeave={()=> {

                scaleOutOnHover(index)
                
                    // translateY(data.length)
                    setMouseLeave(true)
             
            }
            }
            className='opacity-0   overflow-hidden rounded-lg'

            ref={(el:HTMLDivElement) => {
imageContainerRef.current[index] = el

            }}
            >
                <img className='w-[80px] h-[80px] object-cover'  src={item.img} alt={item.name} />
            </div>
        })}

       
       </section>
       <div className='w-[80%] mx-auto text-center h-[350px]  overflow-y-hidden  '>
        
        <aside className=' overflow-y-hidden '
        
     
        >
{/* ${index % 2 == 0 ? "bg-[red]" : "bg-[blue]"}  */}

     {pageRendered && [...data.map(item => item),{name:"Capitals",id:data.length,img:""}].map((item,index)=>{
         
         return   <h1
        //  style={{
            //     transform:`translateY(-${currIndex * 100}%)`
        // }}
         className={`counttry-name text-[4rem] uppercase   transition-transform ease-in-out duration-500 text-center  flex flex-col items-center justify-center opacity-0 `} key={index + 1} >
            <span className={`split-text font-black text-[15rem]  ${item.name == "Capitals" ? "text-white": "text-[red]"} `}>
            {item.name}
        </span>
        </h1>
     
     })}
     </aside>
       </div>
       </div>
  )
}

export default SplitTextCountries