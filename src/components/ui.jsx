export const Btn=({children,className='',outline,...p})=>(
  <button {...p} className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:opacity-85 ${outline?'border border-line bg-transparent text-fg':'bg-accent'} ${className}`}>{children}<span>↗</span></button>)
// Missing asset => plain dark block. Drop files in /public/images/<name>.jpg
export const Img=({name,className=''})=><div className={`bg-black bg-cover bg-center ${className}`} style={{backgroundImage:`url(${import.meta.env.BASE_URL}images/${name}.jpg)`}}/>
export const PageHero=({tag,children,sub})=>(
  <section className="px-5 pb-16 pt-20 text-center" data-reveal>
    <span className="rounded-lg bg-accent px-4 py-2 text-xs font-semibold uppercase text-white">{tag}</span>
    <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-tight md:text-6xl">{children}</h1>
    <p className="mx-auto mt-6 max-w-xl text-sm text-muted md:text-base">{sub}</p>
  </section>)
export const SectionHead=({children,sub,btn})=>(
  <div data-reveal className="mb-10 flex items-end justify-between gap-6"><div><h2 className="text-4xl text-accent md:text-5xl">{children}</h2><p className="mt-3 max-w-md text-sm text-muted">{sub}</p></div>{btn&&<Btn className="hidden sm:inline-flex">{btn}</Btn>}</div>)
export const Wrap=({children,className=''})=><div className={`mx-auto max-w-[1280px] px-5 ${className}`}>{children}</div>
export const Dim=({children})=><span className="text-muted">{children}</span>
