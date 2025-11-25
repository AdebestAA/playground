import  { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import _SplitText, { SplitText } from 'gsap/SplitText'


gsap.registerPlugin(SplitText)

const data = [
    {
        id:1,
        name:"Amara",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/f_auto,q_auto:low,w_250/v1763995731/portrait-beautiful-smiling-woman-with-curly-hair-looking-camera_1_dtaf9b.jpg"
    },
    {
        id:2,
        name:"Sophia",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/f_auto,q_auto:low,w_250/v1763995717/young-sensual-african-american-woman-looking-camera_1_mo6axe.jpg"
    },
    {
        id:3,
        name:"Olivia",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/f_auto,q_auto:low,w_250/v1763992976/portrait-cute-african-american-curly-young-woman-studio_i78dhy.jpg"
    },
    {
        id:4,
        name:"Zainab",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/f_auto,q_auto:low,w_250/v1763992891/smiling-young-woman-with-curly-hair_fiw6tt.jpg"
    },
    {
        id:5,
        name:"Michael",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/f_auto,q_auto:low,w_250/v1763992797/portrait-young-african-american-man_ayecjt.jpg"
    },
    {
        id:6,
        name:"Aisha",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/f_auto,q_auto:low,w_250/v1763992822/people-showing-support-respect-with-yellow-background-suicide-prevention-day_cwg1e7.jpg"
    },
    {
        id:7,
        name:"Fadekemi",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/f_auto,q_auto:low,w_250/v1763992799/smiling-black-woman-with-curly-hair-hoop-earrings_p3njwr.jpg"
    },
    {
        id:8,
        name:"Oyin",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/f_auto,q_auto:low,w_250/v1763995717/worldface-russian-woman-white-background_1_vvolq5.jpg"
    },
    {
        id:9,
        name:"ADELAJA",
        img:"https://res.cloudinary.com/ddojoiqku/image/upload/f_auto,q_auto:low,w_250/v1763992832/close-up-man-portrait-new-york-city_qfabhz.jpg"
    },
]



const SplitTextCountries = () => {

    const imageContainerRef = useRef<HTMLDivElement[] | []>([])
    // const [currIndex,setCurrIndex] = useState<number>(data.length + 2)
    const [mouseLeave,setMouseLeave] = useState<boolean>(true)
    const [interValCount,setIntervalCount] = useState<number>(0)
    const [pageRendered,setPageRendered] = useState<boolean>(false)
    // const intervalCountRef = useRef<number>(0)
    const gsapCtx = useRef<gsap.Context  | null>(null)
    const countRefs = useRef<HTMLHeadingElement[]>([]);
    const splitTextRefs = useRef<HTMLSpanElement[] |[]>([])
    const countryNameRefs = useRef<HTMLHeadElement[] | []>([])
const splitInstances = useRef<_SplitText[]>([]);

 

    useEffect(() => {
//   splitInstances.current = new SplitText(".split-text",{type:"chars"})
        gsapCtx.current = gsap.context(() => {})
      
        return () => gsapCtx?.current?.revert()
      }, [])


    //   COMMENT THREE
// gsap for image
    useEffect(()=>{
setPageRendered(true)
gsapCtx.current?.add(()=>{
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

return ()=> gsapCtx.current?.revert()
    },[])






    // scale in hover 

    const scaleOnHover = (index:number)=> {
        // splitTextEffect()
        gsap.to(imageContainerRef.current[index],{
            scale:1.3,
            duration:0.5,
            ease:"power2.inOut",
            overwrite:"auto"
          
        })


    }
    const scaleOutOnHover = (index:number)=> {
        // removeSplitTextEffect()
        gsap.to(imageContainerRef.current[index],{
            scale:1,
            duration:0.7,
            overwrite:"auto"
            
        })


    }



    




const translateY = (index:number)=>{

gsap.to(".counttry-name",{
y:`-${(index * 100)}%`,
opacity:1,
delay:-14

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


// COMMENT ONE
useEffect(()=>{
if (!mouseLeave) {
    return
}

// console.log(interValCount);

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




const displayData = useMemo(() => 
    [...data, {name: "the squad", id: data.length, img: ""}], 
    []
);

const dataArray = useMemo(()=> [...data],[])

useEffect(()=>{
    const split = new SplitText(".team-members",{
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

<aside className='lg:hidden '>
<h1 className='text-center'>sorry,this animation/visual effect is only available for desktop view</h1>
</aside>
   <aside className='lg:block hidden'>
   <div className='overflow-y-hidden'>
      <h1 className='team-members text-center  text-[4rem] font-bold '>TEAM MEMBERS</h1>
      </div>


       <section className='flex justify-between gap-x-4 overflow-hidden w-[50%] mx-auto py-8 px-4'>
        {dataArray.map((item,index:number)=>{

            return <div
key={index + 1}
            onMouseEnter={()=> {
                scaleOnHover(index)
          
            setMouseLeave(false)
            
            translateY(index)
           
            
            
            }}
            onMouseLeave={()=> {

                scaleOutOnHover(index)
                
                    // translateY(data.length)
                    setMouseLeave(true)
             
            }
            }
            // w-[100px] h-[100px] bg-[red]
            className='opacity-0  rounded-md'

            ref={(el:HTMLDivElement) => {
imageContainerRef.current[index] = el

            }}
            >
                <img className='w-[80px] h-[80px] object-cover bg-gray-200 rounded-lg' loading='lazy' src={item.img} alt={item.name} />
            </div>
        })}

       
       </section>
       <div className='w-[80%] mx-auto text-center h-[350px]  overflow-y-hidden  '>
        
        <aside className=' overflow-y-hidden '
        
     
        >

     {pageRendered && displayData.map((item,index)=>{
         
         return   <h1
        //  style={{
            //     transform:`translateY(-${currIndex * 100}%)`
        // }}
        ref={(el)=> {
            countryNameRefs.current[index] = el as HTMLHeadElement
        }}
         className={`counttry-name text-[4rem] uppercase   transition-transform ease-in-out duration-500 text-center  flex flex-col items-center justify-center opacity-0 `} key={index + 1} >
            <span
            ref={(el)=> {
                splitTextRefs.current[index] = el as HTMLSpanElement
            }}
            className={`split-text font-black text-[15rem]  ${item.name == "the squad" ? "text-white": "text-[red]"} `}>
            {item.name}
        </span>
        </h1>
     
     })}
     </aside>
       </div>
   </aside>
       </div>
  )
}

export default SplitTextCountries