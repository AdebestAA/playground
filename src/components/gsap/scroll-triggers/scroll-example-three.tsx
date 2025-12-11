
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { use, useEffect, useState } from 'react'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger,SplitText)
const ScrollExampleThree = () => {



    useEffect(()=>{

        const container = document.querySelector(".scroll-container")  as HTMLElement
 
     


const split = SplitText.create(".item",{
    type:"words",
    wordsClass:"word++"
})



gsap.set(".word",{
    opacity:0,
    y:"random([-100,100])",
    scale:"random([0,5])",
    x:"random([-100,100])",
    rotate:"random([-360deg,360deg])"
})
      function entireWidthToScroll():number {

        
        return (container.offsetWidth - window.innerWidth)
      }
const ctx = gsap.context(()=>{

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:".scroll-container",
            start:"top top",
            end:`+=${entireWidthToScroll() + 2000}px `,
           pin:true,
            scrub:1,
            onUpdate:()=>{

                const words:NodeListOf<Element> = document.querySelectorAll(".word") 

                console.log(words);
                
                
             words.forEach((item,_)=>{
if (item.getBoundingClientRect().x + (window.innerWidth / 3) < window.innerWidth) {
   
    
    gsap.to(item,{
        opacity:1,
        scale:1,
        rotate:"0",
        y:"0",
        x:"0",

    })
}
                

              })


    

            }
           
        }
    })


        tl.to(".item",{
        x:-entireWidthToScroll() - 800,
        duration:3,
        ease:"none",
        },0)

})


return ()=> ctx.revert()
    },[])

    useEffect(()=>{
window.addEventListener("scroll",()=>{


})
    },[])




  return (
    <div className='overflow-x-hidden'>

        {/* <h1 className='play text-[3rem] '>solid text play here</h1> */}
{/* <footer className='h-screen text-2xl'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum quas quidem voluptas necessitatibus laudantium perferendis, reprehenderit voluptatem minima aspernatur, placeat totam facilis ducimus eligendi officia temporibus commodi quaerat iure, tempora neque. Velit itaque amet neque nemo delectus eaque, numquam perspiciatis ea atque sit dolorem quaerat perferendis cum ex dolor, alias cupiditate dicta cumque quisquam sequi quis eligendi? Corporis libero ea omnis, ex rem id placeat. Eum inventore amet vel voluptatum blanditiis doloribus quas, expedita earum, obcaecati, numquam assumenda maiores tenetur eveniet ad magnam provident ut harum nemo accusamus dolorum aliquid perferendis itaque. Aspernatur soluta quibusdam libero. Accusantium, eum quia.
</footer> */}





{/* FOR TEST ONLY */}

{/* <article className=' w-[60%] overflow-auto mx-auto test-container bg-[red]'>


    <section className='h-[20vh] test-scroll w-max '>
<h1 className='text-[10rem] test-text'>nice to have you here on my playground, I am Adebest</h1>
    </section>

</article> */}

{/* real scroll */}
<section className='h-screen flex items-center min-w-max     scroll-container  lg:py-0 py-18'>
    
<h1 className='lg:text-[7rem] md:text-[5rem] text-[4rem] item  h-[30vh]'>welcome to my playground, I am Adebest and I love animations and visual effects</h1>
   
</section>


<footer className='h-screen text-2xl'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum quas quidem voluptas necessitatibus laudantium perferendis, reprehenderit voluptatem minima aspernatur, placeat totam facilis ducimus eligendi officia temporibus commodi quaerat iure, tempora neque. Velit itaque amet neque nemo delectus eaque, numquam perspiciatis ea atque sit dolorem quaerat perferendis cum ex dolor, alias cupiditate dicta cumque quisquam sequi quis eligendi? Corporis libero ea omnis, ex rem id placeat. Eum inventore amet vel voluptatum blanditiis doloribus quas, expedita earum, obcaecati, numquam assumenda maiores tenetur eveniet ad magnam provident ut harum nemo accusamus dolorum aliquid perferendis itaque. Aspernatur soluta quibusdam libero. Accusantium, eum quia.
</footer>
<footer className='h-screen text-2xl'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum quas quidem voluptas necessitatibus laudantium perferendis, reprehenderit voluptatem minima aspernatur, placeat totam facilis ducimus eligendi officia temporibus commodi quaerat iure, tempora neque. Velit itaque amet neque nemo delectus eaque, numquam perspiciatis ea atque sit dolorem quaerat perferendis cum ex dolor, alias cupiditate dicta cumque quisquam sequi quis eligendi? Corporis libero ea omnis, ex rem id placeat. Eum inventore amet vel voluptatum blanditiis doloribus quas, expedita earum, obcaecati, numquam assumenda maiores tenetur eveniet ad magnam provident ut harum nemo accusamus dolorum aliquid perferendis itaque. Aspernatur soluta quibusdam libero. Accusantium, eum quia.
</footer>

    </div>
  )
}

export default ScrollExampleThree