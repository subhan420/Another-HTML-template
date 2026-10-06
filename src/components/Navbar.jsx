import {useState} from 'react'
import ThemeToggle from './ThemeToggle'
import {Wrap} from './ui'
export const NAV=['Home','Services','Portfolio','Pricing','Blog','Contact']
export const Logo=()=><a href="#home" className="flex items-center gap-2 text-lg"><svg width="26" height="20" viewBox="0 0 26 20" className="fill-accent">{[[0,6,8],[5,2,16],[10,0,20],[15,4,12],[20,8,6]].map(([x,y,h])=><rect key={x} x={x} y={y} width="3.5" height={h} rx="1.7"/>)}</svg>william.design</a>
export const go=(n,close)=>e=>{close?.();if(n==='Contact'){e.preventDefault();document.getElementById('contact')?.scrollIntoView()}}
export default function Navbar({page}){
  const [open,setOpen]=useState(false)
  return <header className="sticky top-0 z-50 border-b border-line/40 bg-bg/90 backdrop-blur">
    <Wrap className="flex h-[72px] items-center justify-between">
      <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Menu">☰</button>
      <Logo/>
      <nav className={`${open?'flex':'hidden'} absolute left-0 top-full w-full flex-col gap-4 border-b border-line bg-bg p-5 md:static md:flex md:w-auto md:flex-row md:gap-8 md:border-0 md:p-0 text-sm`}>
        {NAV.map(n=><a key={n} href={'#'+n.toLowerCase()} onClick={go(n,()=>setOpen(false))} className={`transition-colors hover:text-accent ${page===n.toLowerCase()?'text-fg':'text-muted'}`}>{n}</a>)}
      </nav>
      <div className="flex items-center gap-4"><span className="hidden gap-3 text-xs font-semibold sm:flex">{['f','X','in','gh'].map(s=><span key={s}>{s}</span>)}</span><ThemeToggle/></div>
    </Wrap></header>
}
