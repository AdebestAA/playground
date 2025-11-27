

import Welcome from './components/welcome'
import SplitTextCountries from './components/split-text-countries'
import Playground from './components/playground'
import RollingText from './components/rolling-text'
import { useEffect, useState } from 'react'


function App() {
const [count,setCount] = useState(0)

      
useEffect(()=>{
   if (count == 6) {
      return
   }
const intervalCount = setInterval(()=>{
setCount(prev => prev + 1)
},1000)

return ()=> clearInterval(intervalCount)
},[count])

  return (


   <div className=''>
  

   {count == 6 ? "" :<RollingText/>}
{count == 6 && <Welcome/>}



{/* 
<aside className='w-full bg-[blue]'>

</aside> */}

{/* <SplitTextCountries/> */}


{/* <h1>okay</h1> */}
   {/* <br />
   <br /> */}
  
{/* <Play/> */}


   
   </div>
  )
}

export default App
