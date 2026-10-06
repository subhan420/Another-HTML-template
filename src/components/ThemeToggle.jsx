import {useEffect,useState} from 'react'
export default function ThemeToggle(){
  const [light,setLight]=useState(()=>document.documentElement.classList.contains('light'))
  useEffect(()=>{document.documentElement.classList.toggle('light',light);try{localStorage.setItem('theme',light?'light':'dark')}catch(e){}},[light])
  return <button onClick={()=>setLight(!light)} aria-label="Toggle theme" className="text-xl text-amber-400">{light?'☾':'☀'}</button>
}
