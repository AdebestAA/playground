import  { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'


gsap.registerPlugin(SplitText)

const data = [
    {
        id:1,
        name:"Amara",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/v1763995731/portrait-beautiful-smiling-woman-with-curly-hair-looking-camera_1_dtaf9b.jpg"
    },
    {
        id:2,
        name:"Sophia",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/v1763995717/young-sensual-african-american-woman-looking-camera_1_mo6axe.jpg"
    },
    {
        id:3,
        name:"Olivia",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/v1763992976/portrait-cute-african-american-curly-young-woman-studio_i78dhy.jpg"
    },
    {
        id:4,
        name:"Zainab",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/v1763992891/smiling-young-woman-with-curly-hair_fiw6tt.jpg"
    },
    {
        id:5,
        name:"Michael",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/v1763992797/portrait-young-african-american-man_ayecjt.jpg"
    },
    {
        id:6,
        name:"Aisha",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/v1763992822/people-showing-support-respect-with-yellow-background-suicide-prevention-day_cwg1e7.jpg"
    },
    {
        id:7,
        name:"Fadekemi",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/v1763992799/smiling-black-woman-with-curly-hair-hoop-earrings_p3njwr.jpg"
    },
    {
        id:8,
        name:"Oyin",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/v1763995717/worldface-russian-woman-white-background_1_vvolq5.jpg"
    },
    {
        id:9,
        name:"ADELAJA",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/v1763992832/close-up-man-portrait-new-york-city_qfabhz.jpg"
    },
]



const SplitTextCountries = () => {

    const imageContainerRef = useRef<HTMLDivElement[] | []>([])
    // const [currIndex,setCurrIndex] = useState<number>(data.length + 2)
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


console.log(clx);

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


useEffect(()=>{
    const split = SplitText.create(".team-members",{
        type:"chars"
    })

    gsap.from(split.chars,{
        y:100,
        duration:2,
        autoAlpha:0,
        stagger:{
            amount:1,
            from:"start"
        }
    })

},[])

  return (
    <div className='font-barlow py-8'>

      <div className='overflow-y-hidden'>
      <h1 className='team-members text-center  text-[4rem] font-bold '>TEAM MEMBERS</h1>
      </div>


       <section className='flex justify-between gap-x-4 overflow-hidden w-[50%] mx-auto py-8 px-4'>
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

     {pageRendered && [...data.map(item => item),{name:"the squad",id:data.length,img:""}].map((item,index)=>{
         
         return   <h1
        //  style={{
            //     transform:`translateY(-${currIndex * 100}%)`
        // }}
         className={`counttry-name text-[4rem] uppercase   transition-transform ease-in-out duration-500 text-center  flex flex-col items-center justify-center opacity-0 `} key={index + 1} >
            <span className={`split-text font-black text-[15rem]  ${item.name == "the squad" ? "text-white": "text-[red]"} `}>
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