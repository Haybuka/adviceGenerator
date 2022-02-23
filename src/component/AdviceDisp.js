import React,{useEffect,useState} from 'react'
import Card from './Card'

function AdviceDisp() {
    const [advice,setAdvice] = useState(null);
    let [track,setTrack] = useState(false)
    let [number,setNumber] = useState(5)
    const [newAdvice,setNewAdvice] = useState(false)

    useEffect( ()=> {
      setTrack(true)
      async function fetchNew(){
         try {
          const data = await fetch(`https://api.adviceslip.com/advice/${number}`);
          const response = await data.json()  
          setTrack(false)
          await setAdvice(response.slip)

         } catch (error) {
           console.log(error)
         }
      }
      fetchNew()
    },[number])

    function toggleAdvice(){
      let num = Math.floor(Math.random() * 224)
      setNumber(num)
    }
  return (
    <main className='flex justify-center flex-col-reverse items-center h-screen w-screen bg-primary-400'>
       {advice && <Card {...advice} toggleAdvice={toggleAdvice} track={track}/>}
    </main>
  )
}

export default AdviceDisp