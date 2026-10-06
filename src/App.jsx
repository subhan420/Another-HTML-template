import {useEffect,useLayoutEffect,useState} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
gsap.registerPlugin(ScrollTrigger)
const PAGES={home:Home,services:Services,portfolio:Portfolio,pricing:Pricing,blog:Blog}
const get=()=>location.hash.slice(1)||'home'
export default function App(){
  const [page,setPage]=useState(get)
  useEffect(()=>{const f=()=>{setPage(get());scrollTo(0,0)};addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[])
  // GSAP: any element with data-reveal fades/slides in on scroll. Add more tweens here.
  useLayoutEffect(()=>{
    const c=gsap.context(()=>gsap.utils.toArray('[data-reveal]').forEach(el=>gsap.from(el,{y:40,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%'}})))
    return()=>c.revert()
  },[page])
  const Page=PAGES[page]||Home
  return <><Navbar page={page}/><main><Page/></main><Footer/></>
}
