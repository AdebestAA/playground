import { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const ScrollExampleTwo = () => {

    const itemsRef = useRef<HTMLDivElement[] | []>([])
    useEffect(()=>{

        const ctx = gsap.context(()=>{

            gsap.from(".each-box", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".each-box",
                    start: "top 80%",
                    toggleActions: "play none none reset"
                }
            }

            )

            
        })



  

        return ()=> ctx.revert()

        
    },[])
  return (
    <div className="py-20 ">
    <section className='h-[100vh]'>
    <div className="box1 bg-[red] rounded-md w-[80px] h-[80px] flex items-center justify-center">box1</div>
    </section>

    <section className='h-[100vh]'>

    <div className="box2 bg-[red] rounded-md w-[80px] h-[80px] flex items-center justify-center">box2</div>
    </section>

    <div className='flex items-center justify-between my-6 parent-container w-full bg-[red] overflow-y-hidden'>
        {Array(3).fill("").map((_,index)=>{

            return <div
            ref={(el)=>{
                itemsRef.current[index] = el as HTMLDivElement
            }}
            key={index}  className='each-box w-[30%] h-[100px] bg-[blue] rounded-md '>

            </div>
        })}
    </div>
    <section className='h-[100vh]'>

    <div className="box3 bg-[red] rounded-md w-[80px] h-[80px] flex items-center justify-center ">box3</div>
    </section>
    
        </div>
  )
}

export default ScrollExampleTwo