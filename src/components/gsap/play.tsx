import gsap from "gsap"
import MorphSVGPlugin from "gsap/MorphSVGPlugin"
import { useEffect } from "react"

gsap.registerPlugin(MorphSVGPlugin)
const Play = () => {



    useEffect(()=>{
const clx = gsap.context(()=>{
gsap.to("#triangle",{
    duration:2,
    morphSVG:"#targetedShape",
    ease:"power1.inOut",
    yoyo:true,
    repeat:-1
})
})


return ()=> clx.revert()
    },[])
  return (
    <div>
  <h1>Play</h1>


{/* morph example */}

<h1>morph example</h1>
<svg width={"100px"} height={"100px"}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143.18 85.95">
{/* triangle */}

<path
id="triangle"
d="M34.78,1.42,68.83,91.84H.72Z" fill="#ed1c24"

/>

{/* targetShape */}

<path
id="targetedShape"
d="M130.18,83.85C-15.14,78,1.55,111.92,1.39,13.45a12,12,0,0,1,12-12C158.81,7.31,142-26.58,142.18,71.84A12,12,0,0,1,130.18,83.85Z" fill="#ed1c24"
style={{display:"none"}}
/>

</svg>




<h1>separate</h1>
<br />



{/* path rectangle */}
<svg width={"100px"} height={"100px"}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143.18 85.95"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M130.18,83.85C-15.14,78,1.55,111.92,1.39,13.45a12,12,0,0,1,12-12C158.81,7.31,142-26.58,142.18,71.84A12,12,0,0,1,130.18,83.85Z" fill="#ed1c24"/><path d="M26.39,86C-4.09,85.69.39,75.14.09,40.62,1.61,32.16-3,12,4.21,4.27,3.13-3.44,126,2,130.18.45a13,13,0,0,1,13,13v58.4a13,13,0,0,1-13,13C81.16,82.87,60,85.23,26.39,86Zm-13-83.5C-3.82,2.61,4.08,31.17,2.08,40.66,1.65,63.14,1.43,74.42,6.73,79.6s16.82,4.72,39.68,3.72c19.38-.85,45.92-2,83.79-.47a11,11,0,0,0,11-11V13.45a11,11,0,0,0-11-11Z" fill="#231f20"/></g></g></svg>


<br />
<br />

{/* path triangle */}
<svg xmlns="http://www.w3.org/2000/svg" width={"100px"} height={"100px"} viewBox="0 0 69.55 92.34"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M34.78,1.42,68.83,91.84H.72Z" fill="#ed1c24"/><path d="M69.55,92.34H0L34.78,0Zm-68.1-1H68.11L34.78,2.84Z" fill="#231f20"/></g></g></svg>


<br />
<br />
<br />

{/* poly gon */}
  <svg width={"100px"} height={"50px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.55 92.34"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="37.77 1.42 65.83 91.84 0.72 91.84 34.77 1.42" fill="#ed1c24" stroke="#231f20" stroke-miterlimit="10"/></g></g></svg>
        <br />
       
        <h1 >F<svg  height="0.9rem" className="inline-block align-baseline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.55 92.34"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="34.77 1.42 68.83 50 34.77 91.84 0.72 50" fill="#ed1c24" stroke="#231f20" stroke-miterlimit="10"/></g></g></svg>ASH
</h1>


{/* 
<svg width="5%" height="100&" viewBox="0 0 1024 1024" className="flash inline bg-[red]"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M704 469.333333h-200.533333L640 106.666667H405.333333l-128 448h183.466667L362.666667 960z" fill="#FFC107" />
       
       </svg> */}


    </div>
  )
}



export default Play