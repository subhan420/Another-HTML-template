import {STATS} from '../data'
import {Wrap} from './ui'
export default function Stats(){
  return <section className="bg-surface/60 py-14"><Wrap className="grid grid-cols-2 gap-8 lg:grid-cols-4">
    {STATS.map(([n,a,b])=><div key={a} data-reveal className="flex items-center gap-2"><span className="text-5xl font-medium md:text-6xl"><span className="text-accent">+</span>{n}</span><span className="text-xs leading-tight text-muted">{a}<br/>{b}</span></div>)}
  </Wrap></section>
}
