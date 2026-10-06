import {useState} from 'react'
import {PageHero,Btn,Wrap,Dim} from '../components/ui'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import {PLANS,FAQ} from '../data'
export default function Pricing(){
  const [open,setOpen]=useState(null)
  return <><PageHero tag="My Pricing" sub="Flexible Plans Tailored to Meet Your Unique Needs, Ensuring High-Quality Services Without Breaking the Bank">Affordable <Dim>Solutions for Every</Dim> Budget</PageHero>
    <Wrap className="grid max-w-3xl gap-6 md:grid-cols-2">{PLANS.map(([n,p,f])=><div key={n} data-reveal className="flex flex-col rounded-2xl border border-line bg-surface/60 p-7"><p className="text-[10px] uppercase text-muted">{n}</p>
      <p className="mt-6 border-b border-line pb-6 text-5xl text-accent">${p}<span className="text-base">/Hour</span></p>
      <ul className="my-6 flex-1 space-y-3 text-xs text-muted">{f.map(x=><li key={x} className="flex gap-3"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted"/>{x}</li>)}</ul><Btn className="w-full">Order Now</Btn></div>)}</Wrap>
    <Wrap className="max-w-xl py-24"><h2 className="mb-10 text-center text-3xl font-medium"><Dim>Common Questions</Dim></h2>
      {FAQ.map((q,i)=><div key={q} className="mb-3 rounded-lg border border-line"><button onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between p-3.5 text-left text-sm">{q}<span className="text-accent">{open===i?'−':'+'}</span></button>
        {open===i&&<p className="px-3.5 pb-4 text-xs text-muted">Get in touch using the form below and I'll reply with the details.</p>}</div>)}</Wrap>
    <Stats/><Contact/></>
}
