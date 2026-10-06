import {PageHero,Wrap,Dim,Img} from '../components/ui'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import {SERVICES} from '../data'
export default function Services(){
  return <><PageHero tag="My Services" sub="With expertise in mobile app and web design, I transform ideas into visually stunning, user-friendly interfaces that captivate and retain users. Explore my work and see design in action.">Transforming Ideas<Dim>into Intuitive Designs for</Dim>Engaging User<Dim>Experiences</Dim></PageHero>
    <Wrap className="mx-auto grid max-w-3xl gap-6 pb-24">{SERVICES.map(([t,rows],i)=><div key={t} data-reveal className="rounded-3xl border border-line bg-surface/60 p-6">
      <div className="flex items-start justify-between"><div><h2 className="text-2xl font-medium">{t}</h2><p className="text-xs text-muted">Creative. Unique. Reality.</p></div><span className="grid h-8 w-8 place-items-center rounded-full border border-line">↗</span></div>
      <Img name={`service-${i+1}`} className="my-5 aspect-[16/9] rounded-xl"/>
      {rows.map(([l,d])=><div key={l} className="grid gap-2 border-t border-line py-4 first:border-0 sm:grid-cols-[130px_1fr]"><b className="text-[10px] font-semibold uppercase leading-snug">{l}</b><p className="text-xs text-muted">{d}</p></div>)}</div>)}</Wrap>
    <Stats/><Contact/></>
}
