import {useState} from 'react'
import {PageHero,Wrap,Dim} from '../components/ui'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import BlogCard from '../components/BlogCard'
import {POSTS} from '../data'
export default function Blog(){
  const [pg,setPg]=useState(1)
  const b='grid h-10 w-10 place-items-center rounded-full border border-line text-sm'
  return <><PageHero tag="Recent Blog" sub="Discover key insights and emerging trends shaping the future of design: a detailed examination of how these innovations are reshaping our industry"><Dim>Explore the</Dim> insights and trends shaping <Dim>our industry</Dim></PageHero>
    <Wrap className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{POSTS.map(p=><BlogCard key={p.img} {...p}/>)}</Wrap>
    <div className="flex justify-center gap-3 py-20"><button className={b} onClick={()=>setPg(Math.max(1,pg-1))}>←</button>{[1,2,3].map(n=><button key={n} onClick={()=>setPg(n)} className={`${b} ${pg===n?'bg-accent text-white':'bg-surface'}`}>{n}</button>)}<button className={b} onClick={()=>setPg(Math.min(3,pg+1))}>→</button></div>
    <Stats/><Contact/></>
}
