import {Img} from './ui'
export default function BlogCard({title,tag,img}){
  return <article data-reveal className="group rounded-2xl border border-line bg-surface/40 p-3 transition hover:-translate-y-1">
    <div className="relative"><Img name={img} className="aspect-[16/9] rounded-xl"/><span className="absolute bottom-2 left-2 rounded-md bg-accent px-3 py-1 text-xs text-white">{tag}</span></div>
    <div className="px-2 pb-4 pt-4 text-center"><p className="text-[11px] text-muted">March 28, 2023 · 3 min read</p><h3 className="mt-2 text-lg font-medium leading-snug">{title}</h3><p className="mt-2 text-xs text-muted">Stay ahead of the curve with these emerging trends in UI/UX design.</p></div></article>
}
