
import { useEffect, useState } from 'react'


function Slides() {
  const [itemToShow,setItemToShow] = useState(0)
  const [completed,setCompleted] = useState(false)
  useEffect(()=>{
const intervalId = setInterval(()=>{
  if (completed) {
    
    setItemToShow(prev => prev + 100)
    console.log("fromCom" , itemToShow);
    
    if (itemToShow === -100) {
      setCompleted(false)
    }
return
  }

setItemToShow(prev => prev - 100)
if (itemToShow === -200) {
  setCompleted(true)
}

},3000)
console.log("notCompleted", itemToShow);
 

return ()=>  clearInterval(intervalId)
  },[itemToShow])
 


  return (

    <div className='wrapper'>
      <section className='container'>
{Array(4).fill("").map((_,index)=>{

return <div  style={{background:`${index % 2 == 0 ? "blue" : "yellow"}`,transform:`translateX(${itemToShow}%)`}} className='each-card'>
  {index + 1}
</div>

})}
      </section>

    </div>
  )
}

export default Slides
