import './App.css';
import Timer from './Timer';
import Wisdom from './Wisdom';
import axios from "axios"
import { useState, useEffect } from "react"

function App() {
  const [wisdom, setWisdom] = useState('Loading Wisdom...')
  const [timedWisdom, setTimedWisdom] = useState('')
    
    useEffect(() => {
        // immediately invoked function expression iffy
        // (async function fetchWisdom() {
        //     try catch whats in handleBestowWisdom
        // })()

        handleBestowWisdom()
        
    }, // dep array -- empty, useEffect runs only on first render. no dep array means useEff will run each render. 
    []
    )



    useEffect(() => {
        // console.log('Time useEffect is running')
        const incrementTime = () => {
            handleTimedBestowWisdom()
        }

        const timeInterval = setInterval(incrementTime, 10000) 
        return() => {
            // console.log('The time useEffect is cleaning up')
            clearInterval(timeInterval)
        }

        
    }, [setTimedWisdom])

    const handleBestowWisdom = async () => {
        try {
           const response = await axios.get('https://api.kanye.rest')
            setWisdom(response.data.quote)
            console.log('wisdom aquired')
        } catch(err) {
            console.warn(err)
        }
    }

    const handleTimedBestowWisdom = async () => {
        try {
           const response = await axios.get('https://api.kanye.rest')
            setTimedWisdom(response.data.quote)
        } catch(err) {
            console.warn(err)
        }
    } 

  return (
    <div className='App'>
      <Wisdom 
      wisdom={wisdom}
      handleBestowWisdom={handleBestowWisdom}
      />
      <Timer 
      wisdom={timedWisdom}
      />
    </div> 
  )
}

export default App;
