import {PageHero,Wrap,Dim,Img} from '../components/ui'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import {PROJECTS} from '../data'
export default function Portfolio(){
  return <><PageHero tag="Recent Work" sub="Explore my latest work and discover the craftsmanship behind each design: a detailed look into how I bring innovation and creativity to life">Explore <Dim>My Latest Work and Discover the</Dim> Craftsmanship Behind <Dim>Each Design</Dim></PageHero>
    <Wrap className="grid gap-6 pb-24">{PROJECTS.map(([c,t,d],i)=><div key={t} data-reveal className="grid gap-8 rounded-3xl border border-line bg-surface/60 p-6 md:grid-cols-[2fr_3fr]">
      <Img name={`project-${i+1}`} className="aspect-square rounded-xl md:aspect-auto md:min-h-[320px]"/>
      <div><p className="text-xs uppercase text-accent">{c}</p><div className="flex justify-between gap-4"><h2 className="mt-1 text-3xl font-medium">{t}</h2><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line">↗</span></div>
        <p className="mt-4 text-xs leading-relaxed text-muted">{d}</p>
        <dl className="mt-8 text-xs">{[['Client','Conceptual JSC'],['Completion Time','6 months'],['Tools','Figma, Sketch, Photoshop, Framer']].map(([k,v])=><div key={k} className="grid grid-cols-2 border-b border-line py-3 last:border-0"><dt className="font-semibold uppercase">{k}</dt><dd className="text-muted">{v}</dd></div>)}</dl></div></div>)}</Wrap>
    <Stats/><Contact/></>
}
