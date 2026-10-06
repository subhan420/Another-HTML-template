import {Logo,NAV,go} from './Navbar'
export default function Footer(){
  return <footer className="border-t border-line/40 py-14 text-center"><div className="flex justify-center"><Logo/></div>
    <nav className="mt-8 flex flex-wrap justify-center gap-6 text-sm">{NAV.map(n=><a key={n} href={'#'+n.toLowerCase()} onClick={go(n)} className="hover:text-accent">{n}</a>)}</nav>
    <p className="mt-8 text-xs text-muted">© 2026 All Rights Reserved by <span className="text-accent">William.design</span></p></footer>
}
