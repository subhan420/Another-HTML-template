import {useState} from 'react'
import {Btn,Img,SectionHead,Wrap,Dim} from '../components/ui'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import BlogCard from '../components/BlogCard'
import {OFFER,TABS,WORKS,RESUME,SKILLS,POSTS} from '../data'
export default function Home(){
  const [tab,setTab]=useState(TABS[0])
  const works=WORKS.filter(w=>tab===TABS[0]||w.includes(tab))
  return <>
    <Wrap className="grid items-center gap-10 py-20 md:grid-cols-2">
      <div data-reveal><p className="mb-4 text-xs">👋 Hi there, I'm William</p>
        <h1 className="text-5xl font-medium leading-tight md:text-6xl">Crafting Intuitive <span className="text-accent">Digital Experiences</span></h1>
        <p className="mt-5 max-w-md text-xs text-muted">I assist individuals and brands in achieving their objectives by creating and developing user-focused digital products and interactive experiences.</p>
        <div className="mt-6 flex gap-3"><Btn>Download CV</Btn><Btn outline>Hire me</Btn></div>
        <p className="mt-5 text-xs text-muted">+ 12 years with professional design experience</p></div>
      <Img name="hero" className="h-[420px] w-full rounded-2xl bg-transparent"/>
    </Wrap>
    <Stats/>
    <Wrap className="py-24"><SectionHead sub="My journey started with a fascination for design and technology, leading me to specialize in UI/UX design." btn="Get a Quote">What do I offer?</SectionHead>
      {OFFER.map(([t,d],i)=><div key={t} data-reveal className="grid items-center gap-3 border-b border-line py-6 md:grid-cols-[1fr_1fr_auto]"><h3 className="text-xl font-medium">0{i+1}.{t}</h3><p className="text-xs text-muted">{d}</p><span className="text-muted">↗</span></div>)}</Wrap>
    <Wrap className="py-24"><SectionHead sub="I believe that working hard and trying to learn every day will make me improve in satisfying my customers." btn="View All Projects">My Latest Works</SectionHead>
      <div className="mb-8 flex flex-wrap gap-3">{TABS.map(t=><button key={t} onClick={()=>setTab(t)} className={`rounded-md border px-3 py-1.5 text-[10px] font-semibold uppercase ${tab===t?'border-accent bg-accent text-white':'border-line text-muted'}`}>{t}</button>)}</div>
      <div className="grid gap-6 md:grid-cols-2">{works.map(([t],i)=><div key={t} data-reveal className="rounded-2xl border border-line bg-surface/50 p-4"><Img name={`work-${i+1}`} className="aspect-[4/3] rounded-xl"/><div className="mt-4 flex items-center justify-between"><h3 className="text-xl font-medium">{t}</h3><span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-white">↗</span></div></div>)}</div></Wrap>
    <Wrap className="py-24"><SectionHead sub="I believe that working hard and trying to learn every day will make me improve in satisfying my customers." btn="Get in touch">My Resume</SectionHead>
      <div className="grid gap-6 md:grid-cols-2">{Object.entries(RESUME).map(([k,rows])=><div key={k} data-reveal className="rounded-2xl border border-line bg-surface/50 p-6"><h3 className="mb-5 text-lg font-medium">{k}</h3><div className="space-y-4">{rows.map(([y,t,s,r])=><div key={t} className="flex items-center justify-between rounded-xl border border-line bg-bg p-4"><div><p className="text-[10px] text-muted">{y}</p><p className="font-medium">{t}</p><p className="text-[11px] text-muted">{s}</p></div>{r&&<span className="text-xl text-accent">{r}<Dim>/5</Dim></span>}</div>)}</div></div>)}</div></Wrap>
    <Wrap className="py-24 text-center"><h2 data-reveal className="text-4xl text-accent md:text-5xl">My Skills</h2>
      <div className="mt-10 grid grid-cols-3 gap-4 md:grid-cols-7">{SKILLS.map(([n,p])=><div key={n} data-reveal className="rounded-xl border border-line bg-surface/50 p-4"><div className="mb-3 text-3xl font-semibold text-accent">{n[0]}</div><b className="text-sm">{p}%</b><p className="text-[10px] uppercase text-muted">{n}</p></div>)}</div></Wrap>
    <Wrap className="py-24"><SectionHead sub="Explore the insights and trends shaping our industry" btn="View more">Recent blog</SectionHead>
      <div className="grid gap-6 md:grid-cols-3">{POSTS.slice(0,3).map(p=><BlogCard key={p.img} {...p}/>)}</div></Wrap>
    <Contact/>
  </>
}
