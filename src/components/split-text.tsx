import  { useEffect } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)
const SplitTextComponent = () => {




    useEffect(()=>{
        let split = SplitText.create(".header-text",{
            // type:"words lines chars"
            type:"chars words",
            // for words
            // wordsClass:"word"
            wordsClass:"word++",

            // for  lines
            // linesClass:"line",

            // for chars
            // charsClass:"char"

            propIndex:true
        })
gsap.from(split.chars,{
    yPercent:"random([-100,100])",
    rotation:"random(-50,50)",
    autoAlpha:1,
    repeat:-1,
    yoyo:true,
    duration:1,
    stagger:{
        amount:2,
        from:"random",
        // repeat:-1,
        // yoyo:true,

    }
    
},
)


    },[])


    


  return (
    <div className='flex items-center justify-center'>
        <div className='w-[70%] mx-auto bg-[red] overflow-hidden'>

<h1 className='header-text text-[3rem]'>Hello, welcome to my playground, keep eye on that</h1>

        </div>
    </div>
  )
}

export default SplitTextComponent